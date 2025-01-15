import MemoForm from "@/components/MemoSection/MemoForm";
import MemoList from "@/components/MemoSection/MemoList";
import MemoSection from "@/components/MemoSection";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        메모 작성 앱
      </h1>
      <MemoSection />
    </div>
  );
}

export default Home;
