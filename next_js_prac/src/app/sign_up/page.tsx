import Link from "next/link";

export default function Login() {

  return (
    <>
      <div className="flex flex-col pt-20 justify-center items-center">

        <div className="w-full text-center m-[10px]">
          회원가입
        </div>

        <Link href={'/'} className="w-[80px] text-center">회원가입</Link>
      </div>
    </>
  );
}
