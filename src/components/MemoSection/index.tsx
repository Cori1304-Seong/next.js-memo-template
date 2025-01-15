"use client";

import { useState } from "react";
import MemoForm from "./MemoForm";
import MemoList from "./MemoList";
import { Memo } from "../types/Memo";

export default function MemoSection() {
  const [memos, setMemos] = useState<Memo[]>([]);

  const addMemo = (memo: Memo) => {
    setMemos((prevMemos) => [...prevMemos, memo]);
  };
  return (
    <div className="flex justify-center gap-8 px-4">
      {/* 왼쪽 사이드: MemoForm */}
      <div className="w-full max-w-sm">
        <MemoForm addMemo={addMemo} />
      </div>

      {/* 중앙: MemoList */}
      <div className="w-full max-w-md">
        <MemoList memos={memos} />
      </div>
    </div>
  );
}
