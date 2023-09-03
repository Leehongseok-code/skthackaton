import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { storage, db, updateDoc, collection, getDocs, deleteDoc } from '../../firebase-config';
import { format } from 'date-fns';
import Footer from '../Footer';
import '../../App.css';

function BoardDetail() {

  const location = useLocation();
  const userData = location.state ? location.state.userData : null;
  const [commentText, setCommentText] = useState(''); // 댓글 저장할 상태 변수
  const [userName, setUserName] = useState('');
  const [updatedComments] = useState('');
  const post = userData;


  // 게시물 데이터 배열 추가
  const [postData, setPostData] = useState([]);

  const [showDelete, setShowDelete] = useState(false);

  const showDeleteMenu = () => {
    setShowDelete(true);
  };

  const hideDeleteMenu = () => {
    setShowDelete(false);
  };

  const deletePost = async () => {
    try {
      // Firebase Firestore에서 해당 게시물 삭제
      const postDocRef = collection(db, 'posts', userUID);
      await deleteDoc(postDocRef);
  
      // 삭제 후, UI에서 해당 게시물을 제거합니다.
      setPostData((prevData) => prevData.filter((item) => item.uid !== userUID));
  
      // 삭제 메뉴를 숨깁니다.
      hideDeleteMenu();
    } catch (error) {
      console.error('Error deleting post:', error);
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

          const formattedTimestamp = format(postData.createdTimestamp.toDate(), 'yy/MM/dd HH:mm');
          postData.createdTimestamp = formattedTimestamp;
          postsData.push(postData);
        });
        setPostData(postsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchUserData();
  }, []); // 빈 배열을 두어 한 번만 데이터를 가져오도록 설정

  // if (!post) {
  //   return <div>게시물을 찾을 수 없습니다.</div>;
  // }

  // 댓글 등록 핸들러
  const submitComment = async () => {
    if (commentText.trim() === '' || userUID === null) {
      // 댓글 내용이 비어있으면 등록하지 않음
      alert('로그인을 하고 댓글을 작성해주세요!');
      return;
    }

    try {
      const newComment = {
        author: userName, // 댓글을 작성한 사용자의 이름
        uid: userUID, // 댓글을 작성한 사용자의 UID
        text: commentText,
      };

      // // 해당 게시물을 찾습니다.
      // const updatedPostData = postData.map((postItem) => {
      //   if (postItem.id === post.id) {
      //     // 해당 게시물을 찾았으면 댓글을 추가합니다.
      //     const updatedComments = [...postItem.comments, newComment];
      //     return { ...postItem, comments: updatedComments };
      //   }
      //   return postItem;
      // });

      // Firebase Firestore에서 해당 게시물 업데이트
      const postDocRef = collection(db, 'posts', postData.uid); // 게시물 문서에 대한 참조
      await updateDoc(postDocRef, { comments: newComment });

      setCommentText(''); // 댓글 작성 완료 후 입력 필드 비우기
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const auth = getAuth();
    let userUID = null;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // 사용자가 로그인한 경우
        userUID = user.uid;
        setUserName(user.displayName || ''); // 사용자 닉네임
      } else {
        // 사용자가 로그아웃한 경우 또는 로그인하지 않은 경우
        userUID = null;
        setUserName('');
      }
    });


  return (
    <>
    <div className="App-back flex justify-center items-center">
      {userData && post ? (
      <div className="rounded overflow-hidden border w-01 lg:w-4/12 md:w-6/12 bg-white mx-3 mt-6 mb-10 md:mx-0 lg:mx-0">
        <div className="w-full flex justify-between p-3">
          <div className="flex">
            <span className="pt-1 ml-2 font-bold text-lg">{post.title}</span>
          </div>
          <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
            <i className="fas fa-ellipsis-h pt-2 text-lg" onClick={showDeleteMenu}></i>
          </span>
        </div>

        {/* 삭제 메뉴 */}
        {showDelete && (
          <div className="bg-white border p-2 absolute right-4 top-4">
            <button onClick={deletePost}>삭제하기</button>
          </div>
        )}

        <div className="w-full flex justify-between px-3">
          <div className="flex">
              <span className="ml-2 font-medium text-sm">{post.createdTimestamp}</span>
          </div>
        </div>
        <img className="relative z-10 w-full bg-cover" src={post.imageUrl} alt="postImage" />
        <div className="px-3 pb-2">
          <div className="pt-2">
            <i className="far fa-heart cursor-pointer"></i>
            <span className="text-sm text-gray-400 font-medium">{post.likes} likes</span>
          </div>
          <div className="pt-1">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2">{post.authorName}</span> {post.content}
            </div>
          </div>
          <div className="text-sm mb-4 text-gray-400 cursor-pointer font-medium">View all {post.commentCount} comments</div>
          
          {/* 댓글 입력 필드 */}
          {/* <div className="mb-3">
            <input
              type="text"
              placeholder="댓글 입력..."
              value={commentText}
              onChange={(e) => setCommentText({ ...commentText, title: e.target.value })}
              className="border rounded w-full py-2 px-3"
            />
          </div>
          
          {/* 댓글 등록 버튼 */}
          {/* <button
            onClick={submitComment}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            댓글 등록
          </button> */}
  
          {/* 댓글 내용 표시 */}
          {post.comments && post.comments.map((comment, index) => (
            <div key={index} className="mb-2 text-sm">
              <span className="font-medium mr-2">{comment.author}</span> {comment.text}
            </div>
          ))}
        </div>
      </div>
      ) : (
        <div>게시물을 찾을 수 없습니다.</div>
      )}
    </div>
    <Footer />
    </>
  );
}

export default BoardDetail;