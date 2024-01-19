import React, { useState } from 'react';
import './PostPage.css';
import PostList from './PostList.tsx';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface PostPageProps {
  onPostSubmit?: (post: Post) => void;
}

interface Post {
  id: number;
  content: string;
  userInfo: UserInfo;
  mediaUrl?: string | null;
}

interface UserInfo {
  name: string;
  gender: 'Macho' | 'Fêmea';
  race: string;
}

const PostPage: React.FC<PostPageProps> = ({ onPostSubmit }) => {
  const [newPost, setNewPost] = useState<string>('');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    gender: 'Macho',
    race: '',
  });
  const [, setPhone] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePost = () => {
    if (newPost.trim() !== '' && userInfo.name.trim() !== '') {
      const post: Post = {
        id: posts.length + 1,
        content: newPost,
        userInfo: { ...userInfo },
        mediaUrl: image ? URL.createObjectURL(image) : null,
      };

      setPosts([...posts, post]);
      setNewPost('');
      setUserInfo({ name: '', gender: 'Macho', race: '' });
      setPhone('');
      setImage(null);

      onPostSubmit && onPostSubmit(post);
    }

    setIsModalOpen(false);
  };

  return (
    
    <>
    <header>
      <center>
        <button className="message-button">
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '2.5em' }} />
        </button>
      </center>
    </header>
    
    <div className="post-page-container">
      <div className="botao-modal">
        <button className="open-modal" onClick={() => setIsModalOpen(true)}>
          Publique um animalzinho encontrado
        </button>
      </div>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <span className="close" onClick={() => setIsModalOpen(false)}>
                &times;
              </span>

              <h2>Criar Publicação</h2>
              <input
                type="text"
                placeholder="Nome"
                value={userInfo.name}
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} />
              <select
                value={userInfo.gender}
                onChange={(e) => setUserInfo({ ...userInfo, gender: e.target.value as 'Macho' | 'Fêmea' })}
              >
                <option value="Escolha" selected><p className="genero">Gênero</p></option>
                <option value="Macho">Macho</option>
                <option value="Fêmea">Fêmea</option>
              </select>
              <input
                type="text"
                placeholder="Raça"
                value={userInfo.race}
                onChange={(e) => setUserInfo({ ...userInfo, race: e.target.value })} />
              <input
                type="text"
                placeholder="Descrição"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)} />
              <input
                type="file"
                accept="image/*,video/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)} />
              <button onClick={handlePost}>Publicar</button>
            </div>
          </div>
        )}
      </div>
      <PostList posts={posts} /></>
  );
};

export default PostPage;
