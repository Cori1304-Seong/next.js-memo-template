import { useState } from "react";
import { Memo } from "../types/Memo";

interface MemoFormProps {
  addMemo: (memo: Memo) => void;
}

export default function MemoForm({ addMemo }: MemoFormProps) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !author) {
      alert("모든 필드를 채워주세요!");
      return;
    }
    addMemo({ title, content, author });
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-700">새 메모 작성</h2>
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목 입력"
          className="w-full border border-gray-300 rounded-lg p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">내용</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용 입력"
          className="w-full border border-gray-300 rounded-lg p-2 h-32"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">작성자</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="작성자 입력"
          className="w-full border border-gray-300 rounded-lg p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        메모 추가
      </button>
    </form>
  );
}
