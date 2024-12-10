import Link from "next/link";

export default function Login() {
console.log('d')
  return (
    <>
      <div className="flex flex-col pt-20 justify-center items-center">
        <div className="w-full text-center m-[10px]">
          로그인
        </div>

        <Link href={'/'} className="w-12 text-center">로그인</Link>
      </div>
    </>
  );
}
