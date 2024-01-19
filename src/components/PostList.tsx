import React from 'react';

import ChatIcon from '../assets/icons/mensagem.png';
import CompartilharIcon from '../assets/icons/enviar.png';
import LocalizacaoIcon from '../assets/icons/localização.png';

interface PostListProps {
  posts: Post[];
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

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="post-list-container">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-content">
            <br></br>
            <p><strong className="tituloPost">{post.userInfo.name}</strong></p>
            <p><strong>Genero</strong>: <span>{post.userInfo.gender}</span></p>
            <p><strong>Raça</strong>: <span>{post.userInfo.race}</span></p>
            <p><strong>Descrição</strong>: <span>{post.content}</span></p>
            <img src={LocalizacaoIcon} />
            <img src={ChatIcon} className="icon"/>
            <img src={CompartilharIcon} className="icon"/>
          </div>
          {post.mediaUrl && (
            <div className="post-media">
              <img src={post.mediaUrl} alt="Anexo" className="media" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
