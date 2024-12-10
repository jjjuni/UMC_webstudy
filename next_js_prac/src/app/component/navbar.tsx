import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-screen h-20 bg-neutral-800 flex justify-between">
      <div className="flex m-10">
        <Link href={'/'} className="w-16 m-1 text-center self-center">홈으로</Link>
        <Link href={'/movies'} className="w-16 m-1 text-center self-center">영화</Link>
      </div>
      <div className="flex m-10">
        <Link href={'login'} className="w-16 m-1 text-center self-center">로그인</Link>
        <Link href={'sign_up'} className="w-16 m-1 text-center self-center">회원가입</Link>
      </div>

    </div>
  )
}

export default Navbar;