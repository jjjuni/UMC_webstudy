// 홈
import { useEffect, useState } from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";
import { useStore } from '@/pages/store/useStore';
import { ClipLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';
import { axiosUserInstance } from './apis/axios-instance';

import { TbPencilPlus } from "react-icons/tb";
import { MdAssignmentInd, MdLogin, MdLogout } from 'react-icons/md';

import "react-grid-layout/css/styles.css"; // CSS 추가
import "react-resizable/css/styles.css";   // resizable 기능을 위한 CSS 추가
import { useDrag } from './hooks/useDrag';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface UserInfo {
  "id": number,
  "email": string,
  "password": string,
  "username": string,
  "refreshToken": string,
  "role": string,
}

export default function Home() {

  const { user, isLogged, userInitialize } = useStore() as { user: UserInfo, isLogged: boolean, userInitialize: () => void };

  const { handleDragStart, handleDragStop, handleClick, isLongPress } = useDrag();

  useEffect(() => {
    const UpdateLogin = () => {
      if (isLogged) {
        setLayouts(prev => {
          const updatedLayout = { ...prev };

          ['row_3', 'row_2', 'row_1'].forEach(rowKey => {
            updatedLayout[rowKey] = updatedLayout[rowKey].map(item => {
              if (item.i === 'login') {
                return {
                  ...item,
                  i: 'mypage',
                  content: user.username,
                  link: '/',
                }
              }
              else if (item.i === 'sign_up') {
                return {
                  ...item,
                  i: 'logout',
                  content: (<MdLogout size={'35px'} />),
                  link: '/',
                }
              }
              return item;
            });
          });
          return updatedLayout;
        })
      }
      else {
        setLayouts(prev => {
          const updatedLayout = { ...prev };

          ['row_3', 'row_2', 'row_1'].forEach(rowKey => {
            updatedLayout[rowKey] = updatedLayout[rowKey].map(item => {
              if (item.i === 'mypage') {
                return {
                  ...item,
                  i: 'login',
                  content: (<MdLogin size={'35px'} />),
                  link: './user/login',
                }
              }
              else if (item.i === 'logout') {
                return {
                  ...item,
                  i: 'sign_up',
                  content: (<MdAssignmentInd size={'35px'} />),
                  link: './user/sign_up',
                }
              }
              return item;
            });
          });
          return updatedLayout;
        })
      }
    }

    UpdateLogin();
  }, [isLogged])

  const [layouts, setLayouts] = useState({
    row_3: [
      { i: "write", x: 0, y: 0, w: 2, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2, content: (<><TbPencilPlus size={'28px'} className='mr-[3px] mb-[2px]' /> 글쓰기</>), link: '/post/create', bg: '--input-background', color: '--concept-color' },
      { i: "posts", x: 2, y: 0, w: 2, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '글목록', link: '/post', bg: '--input-background', color: '--concept-color' },
      { i: "login", x: 4, y: 0, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2, content: (<MdLogin size={'35px'} />), link: '/user/login', bg: 'white', color: '--concept-color' },
      { i: "sign_up", x: 4, y: 1, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2, content: (<MdAssignmentInd size={'35px'} />), link: '/user/sign_up', bg: '--concept-color', color: 'white' },
      { i: "gap", x: 0, y: 2, w: 5, h: 0.3, minW: 5, maxW: 0.3, minH: 5, maxH: 0.3 },
      { i: "post1", x: 0, y: 2, w: 1, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '게시글1', link: '/', bg: '--input-background', color: '--concept-color' },
      { i: "post2", x: 1, y: 2, w: 2, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '게시글2', link: '/', bg: '--input-background', color: '--concept-color' },
      { i: "post3", x: 3, y: 2, w: 2, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '게시글3', link: '/', bg: '--input-background', color: '--concept-color' },
      { i: "post4", x: 1, y: 3, w: 2, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '게시글4', link: '/', bg: '--input-background', color: '--concept-color' },
      { i: "post5", x: 3, y: 3, w: 2, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '게시글5', link: '/', bg: '--input-background', color: '--concept-color' },
    ],
    row_2: [
      { i: "write", x: 0, y: 0, w: 2, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2, content: (<><TbPencilPlus size={'28px'} className='mr-[3px] mb-[2px]' /> 글쓰기</>), link: '/', bg: '--input-background', color: '--concept-color' },
      { i: "login", x: 2, y: 0, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2, content: (<MdLogin size={'35px'} />), link: '/user/login', bg: 'white', color: '--concept-color' },
      { i: "sign_up", x: 2, y: 1, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2, content: (<MdAssignmentInd size={'35px'} />), link: '/user/sign_up', bg: '--concept-color', color: 'white' },
      { i: "gap", x: 0, y: 2, w: 3, h: 0.3, minW: 3, maxW: 0.3, minH: 3, maxH: 0.3 },
      { i: "posts", x: 0, y: 3, w: 1, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '글목록', link: '/post', bg: '--input-background', color: '--concept-color' },
      { i: "post1", x: 1, y: 2, w: 2, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '게시글1', link: '/', bg: '--input-background', color: '--concept-color' },
      { i: "post2", x: 1, y: 3, w: 2, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '게시글2', link: '/', bg: '--input-background', color: '--concept-color' },
      { i: "post3", x: 0, y: 3, w: 2, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '게시글3', link: '/', bg: '--input-background', color: '--concept-color' },
      { i: "post4", x: 0, y: 4, w: 2, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '게시글4', link: '/', bg: '--input-background', color: '--concept-color' },
      { i: "post5", x: 2, y: 4, w: 1, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '게시글5', link: '/', bg: '--input-background', color: '--concept-color' },
    ],
    row_1: [
      { i: "write", x: 0, y: 0, w: 2, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2, content: (<><TbPencilPlus size={'28px'} className='mr-[3px] mb-[2px]' /> 글쓰기</>), link: '/', bg: 'white', color: '--concept-color' },
      { i: "login", x: 2, y: 0, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2, content: (<MdLogin size={'35px'} />), link: '/user/login', bg: 'white', color: '--concept-color' },
      { i: "sign_up", x: 2, y: 1, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2, content: (<MdAssignmentInd size={'35px'} />), link: '/user/sign_up', bg: '--concept-color', color: 'white' },
      { i: "gap", x: 0, y: 2, w: 3, h: 0.3, minW: 3, maxW: 0.3, minH: 3, maxH: 0.3 },
      { i: "posts", x: 0, y: 3, w: 1, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '글목록', link: '/post', bg: '--input-background', color: '--concept-color' },
      { i: "post1", x: 1, y: 2, w: 2, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '게시글1', link: '/', bg: '--input-background', color: '--concept-color' },
      { i: "post2", x: 1, y: 3, w: 2, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '게시글2', link: '/', bg: '--input-background', color: '--concept-color' },
      { i: "post3", x: 0, y: 3, w: 2, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '게시글3', link: '/', bg: '--input-background', color: '--concept-color' },
      { i: "post4", x: 0, y: 4, w: 2, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '게시글4', link: '/', bg: '--input-background', color: '--concept-color' },
      { i: "post5", x: 2, y: 4, w: 2, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2, content: '게시글5', link: '/', bg: '--input-background', color: '--concept-color' },
    ],
  });

  const LogOut = async () => {
    if (!isLongPress) {
      try {
        await axiosUserInstance.post(`${process.env.NEXT_PUBLIC_LOCAL_HOST}/v1/auth/logout`)
        userInitialize();
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div
      className='w-[100%] min-w-[450px]'>
      {/* {load ? (
        <div className='w-[screen] flex justify-center items-center p-[20%]'>
          <ClipLoader className='h-[100%] text-center'
            color={`var(--concept-color)`}
            cssOverride={{}}
            loading
            size={35}
            speedMultiplier={0.7}
          />
        </div>
      ) : ( */}
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ row_3: 800, row_2: 500, row_1: 300 }}
        cols={{ row_3: 5, row_2: 3, row_1: 2 }}
        isResizable={true}
        onDragStart={handleDragStart}
        onDragStop={handleDragStop}
      >
        {layouts.row_3.map((el) => (
          <div key={el.i} className={`text-center content-center ${el.bg === `white` ? `bg-white` : `bg-[${el.bg}]`} text-[${el.color}] rounded-[5px] select-none`}>
            <button onClick={(e) => el.i === 'logout' ? LogOut() : handleClick(e, el.link)} className='w-full h-full flex items-center justify-center'>
              {el.content}
            </button>
          </div>
        ))}
      </ResponsiveGridLayout>
      {/* )} */}
    </div>
  );
}

