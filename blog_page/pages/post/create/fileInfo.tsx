import { useState } from "react";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";


export default function FileInfo () {
  
  const [onDrag, setOnDrag] = useState(false);

  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState(0);

  const handleDragStart = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setOnDrag(true);
  };
  const handleDragEnd = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setOnDrag(false);
  }
  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  }
  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setOnDrag(false);

    const file = e.dataTransfer.files[0];

    const inputFile = document.getElementById('file') as HTMLInputElement;

    if (file && inputFile && file.type === 'image/png') {
      const fileList = [];
      fileList.push(file);

      const dataTransfer = new DataTransfer();
      fileList.forEach(file => dataTransfer.items.add(file));

      inputFile.files = dataTransfer.files;

      setFileName(`${inputFile.files[0].name}`)
      setFileSize(file.size)
    }

    // const file = e.dataTransfer.fles[0];
  }

  const handleFileChange = (e: React.DragEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(`${file.name}`)
      setFileSize(file.size)
    }
    else {
      setFileName('')
    }
  }

  const clearFile = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setFileName('')
    setFileSize(0)
    const inputFile = document.getElementById('file') as HTMLInputElement;
    inputFile.value = '';
  }


  return (
    <>
      <label
        htmlFor='file'
        onDragEnter={handleDragStart}
        onDragOver={handleDragOver}
        onDragLeave={handleDragEnd}
        onDrop={handleDrop}
      >
        <div className={`w-full h-[150px] border-[1px] justify-items-center font-thin ${onDrag && `border-dashed border-[--concept-color] text-[--concept-color] bg-[--input-background]`} rounded-[5px] content-center border-[--border-color] text-[16px] cursor-pointer hover:text-[--concept-color] hover:border-[--concept-color]`}>
          {fileName === '' ?
            <BsFileEarmarkPlus size={'40px'} /> :
            <div className="flex justify-center w-[100%]">
              <div className="text-start w-[100%] ml-[10%]">
                <p className="text-[15px] border-b-[1px] border-[--border-color] text-white">파일</p>
                <p className="text-[13px] font-thin text-[#afafaf]">{fileName}</p>

                <p className="text-[15px] border-b-[1px] border-[--border-color] mt-[10px] text-white">크기</p>
                <p className="text-[13px] font-thin text-[#afafaf]">
                  {fileSize < 1024
                    ? `${fileSize}b`
                    : fileSize < 1024*1024
                    ? `${(fileSize / 1024).toFixed(1)}Kb`  // 소수점 한자리로 표현
                    : `${(fileSize / (1024*1024)).toFixed(1)}Mb`}
                </p>
              </div>

              <button onClick={(e) => clearFile(e)} className="outline-none">
                <MdDeleteForever className=" hover:text-[--error-color] ml-[50px] mr-[50px] text-white" size={'30px'} />
              </button>
            </div>
          }
        </div>
      </label>
      <input
        type='file'
        accept=".png"
        name='file'
        id='file'
        onChange={handleFileChange}
        className="hidden"
      />
    </>
  )
}

