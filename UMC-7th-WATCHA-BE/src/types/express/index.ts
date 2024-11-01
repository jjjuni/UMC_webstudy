import { JwtPayload } from 'jsonwebtoken';

declare module 'express' {
  interface Request {
    user?: JwtPayload; // Add the user property to the request object
  }
}
