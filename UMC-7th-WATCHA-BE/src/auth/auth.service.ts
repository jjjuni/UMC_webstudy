import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { User } from '@src/user/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '@src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async parseBearerToken(rawToken: string, isRefreshToken: boolean) {
    const bearerSplit = rawToken.split(' ');
    if (bearerSplit.length !== 2) {
      throw new BadRequestException('잘못된 형태의 토큰입니다.');
    }

    const [bearer, token] = bearerSplit;

    if (bearer.toLowerCase() !== 'bearer') {
      throw new BadRequestException('잘못된 형태의 토큰입니다.');
    }

    // 검증
    // decode -> 검증 X (토큰이 맞는지, 만료되었는지)
    const payload = await this.jwtService.verifyAsync(token, {
      secret: isRefreshToken ? 'matthew' : 'matthew',
    });

    if (isRefreshToken) {
      if (payload.type !== 'refresh') {
        throw new BadRequestException('Refresh 토큰을 입력해주세요.');
      }
    } else {
      if (payload.type !== 'access') {
        throw new BadRequestException('Access 토큰을 입력해주세요.');
      }
    }

    return payload;
  }

  async issueToken(
    user: { id: number; email: string },
    isRefreshToken: boolean,
  ) {
    const refreshTokenSecret = 'matthew';
    const accessTokenSecret = 'matthew';

    return this.jwtService.signAsync(
      {
        sub: user.id,
        email: user.email,
        type: isRefreshToken ? 'refresh' : 'access',
      },
      {
        secret: isRefreshToken ? refreshTokenSecret : accessTokenSecret,
        expiresIn: isRefreshToken ? '24h' : 300,
      },
    );
  }

  async register(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const { email, password, passwordCheck } = createUserDto;

    // 1. Check if passwords match
    if (password !== passwordCheck) {
      throw new BadRequestException('비밀번호가 일치하지 않습니다.');
    }

    // 2. Check if user already exists
    const user = await this.userRepository.findOne({
      where: { email },
    });

    if (user) {
      throw new BadRequestException('이미 가입한 이메일 입니다.');
    }

    // 3. Hash the password using bcrypt
    const hash = await bcrypt.hash(password, 10);

    // 4. Save the new user to the database
    await this.userRepository.save({
      email,
      password: hash,
    });

    // 5. Return the newly created user
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async login(createUserDto: Omit<CreateUserDto, 'passwordCheck'>) {
    const { email, password } = createUserDto;

    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new BadRequestException('잘못된 로그인 정보입니다!');
    }

    const passOk = await bcrypt.compare(password, user.password);

    if (!passOk) {
      throw new BadRequestException('잘못된 로그인 정보입니다!');
    }

    return {
      refreshToken: await this.issueToken(user, true),
      accessToken: await this.issueToken(user, false),
    };
  }
}
