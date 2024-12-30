'use client'
import { BsFileEarmarkPlus } from "react-icons/bs";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TbPencilPlus } from "react-icons/tb";
import { axiosPostInstance } from '@/pages/apis/axios-instance'
import FileInfo from "./fileInfo";
import { useRouter } from "next/router";

const CreatePostPage = () => {

  const router = useRouter();

  const createPost = async (formData) => {
    // console.log(formData.get('title'))
    // console.log(formData.get('file'))
    // console.log(formData.get('content'))

    const imageForm = new FormData();
    const imageFile = formData.get('file')
    imageForm.append('image', imageFile)

    for (const [key, value] of imageForm.entries()) {
      console.log(`${key}: ${value}`);
    }

    let imageUrl;

    try{                                                           // 이미지 등록
      const response = await axiosPostInstance.post(
        `${process.env.NEXT_PUBLIC_LOCAL_HOST}/v1/common/image`,
        imageForm,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )
      imageUrl = response.data.imageUrl

    } catch (error) {
      console.log(error)
    } finally{
      try{
        await axiosPostInstance.post(
          `${process.env.NEXT_PUBLIC_LOCAL_HOST}/v1/posts`,
          {
            title: formData.get('title'),
            content: formData.get('content'),
            imageUrl: imageUrl,
          }
        )
      router.push('/');
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <form className="w-[80%]" action={createPost}>
      <input name='title' placeholder='제목을 입력하세요' className="w-full h-[50px] rounded-[5px] bg-[--input-background] text-[--foreground] p-[10px] text-[20px] outline-none border-[1px] border-[--border-color]" />

      <div className="h-[10px]" />

      <FileInfo/>

      <div className="h-[10px]" />

      <textarea name='content' placeholder='내용을 입력해주세요' className="whitespace-pre-wrap break-words w-full h-[600px] rounded-[5px] bg-[--input-background] text-[--foreground] text-[17px] p-[10px] font-thin border-[1px] border-[--border-color] outline-none resize-none" />
      <button className="w-full h-[80px] border-[1px] border-[--border-color] rounded-[5px] text-[white] bg-[--concept-color] justify-items-center">
        <TbPencilPlus size={'30px'} />
      </button>
    </form>
  )
}

export default CreatePostPage;