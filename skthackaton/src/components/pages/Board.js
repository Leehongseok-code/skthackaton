import React, { useState, useEffect } from 'react';
import { storage, db, ref, doc, updateDoc, collection, getDocs,serverTimestamp } from '../../firebase-config';
import { Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import Footer from '../Footer';
import '../../App.css';

function Board() {
  const navigate = useNavigate();

  // 검색어 상태 추가
  const [searchQuery, setSearchQuery] = useState('');

   // 게시물 데이터 배열 추가
   const [userData, setUserData] = useState([]);

  // 검색어 입력 핸들러
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const navigateToBoardWrite = () => {
    navigate('/boardwrite');
  };

  // 게시물 상세 페이지로 이동할 때 조회수 업데이트
  const navigateToBoardDetail = async (user, index) => {
    try {
      // 해당 게시물의 Firestore 문서 업데이트
      const postRef = doc(db, 'posts', user.id); // 'id'는 게시물 문서의 고유 식별자
      await updateDoc(postRef, { views: user.views + 1 });

      // 게시물 상세 페이지로 이동
      navigate(`/boarddetail/${index + 1}`, { state: { userData: user } });
    } catch (error) {
      console.error('Error updating views:', error);
    }
  };

  useEffect(() => {
    // Firebase Firestore에서 게시물 데이터 가져오기
    const fetchUserData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'posts')); // 'posts' 컬렉션의 문서들 가져오기
        const postsData = [];
        
        querySnapshot.forEach((doc) => {
          const postData = doc.data();
          postData.id = doc.id; // 게시물 문서 고유 ID 추가

          // Timestamp 객체를 문자열로 변환하여 사용
          const formattedTimestamp = format(postData.createdTimestamp.toDate(), 'yy/MM/dd HH:mm');
          postData.createdTimestamp = formattedTimestamp;
          postsData.push(postData);
        });
        setUserData(postsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchUserData();
  }, []); // 빈 배열을 두어 한 번만 데이터를 가져오도록 설정

  return (
    <>
    <div className="antialiased font-sans bg-yellow-100">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="my-2 flex sm:flex-row flex-col justify-between">
          {/* 검색 필드 */}
          <div className="block relative">
            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                </path>
              </svg>
            </span>
            <input
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>
          <div className="block relative">
            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
            </span>
            <button
              onClick={navigateToBoardWrite}
              className="btns btn--board"
            >게시글 작성</button>
          </div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      순번
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      제목
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      작성자
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      조회수
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      작성시간
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user, index) => (
                    <tr key={index}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{index+1}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      onClick={() => navigateToBoardDetail(user, index)} // 클릭 시 상세 페이지로 이동 및 조회수 업데이트
                      style={{ cursor: 'pointer' }} >
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img className="relative z-10 w-auto h-full" src={user.imageUrl} alt="postImg" />
                          </div>
                          <p className='mx-6'>{user.title}</p>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{user.authorName}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{user.views}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{user.createdTimestamp}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* 페이지네이션과 페이지당 항목 수 표시 */}
              <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                <span className="text-xs xs:text-sm text-gray-900">
                  Showing 1 to {userData.length} of {userData.length} Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button
                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                    이전
                  </button>
                  <button
                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                    다음
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Board;