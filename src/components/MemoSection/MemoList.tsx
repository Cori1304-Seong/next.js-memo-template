import { Memo } from "../types/Memo";

interface MemoListProps {
  memos: Memo[];
}

export default function MemoList({ memos }: MemoListProps) {
  const handleDownloadJson = () => {
    const jsonBlob = new Blob([JSON.stringify(memos, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(jsonBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "memos.json";
    link.click();
    URL.revokeObjectURL(url); // URL 해제
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-700">메모 목록</h2>
      {memos.length === 0 ? (
        <p className="text-gray-500">작성된 메모가 없습니다.</p>
      ) : (
        <ul className="space-y-4">
          {memos.map((memo, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">
                {memo.title}
              </h3>
              <p className="text-gray-700 mt-2">{memo.content}</p>
              <p className="text-sm text-gray-500 mt-4">
                작성자: {memo.author}
              </p>
            </li>
          ))}
        </ul>
      )}
      {memos.length > 0 && (
        <button
          onClick={handleDownloadJson}
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          JSON으로 다운로드
        </button>
      )}
    </div>
  );
}
