'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-4">
          <Link href="/" className="font-medium text-2xl text-green-800 dark:text-green-400">
            BÙI NGỌC SƠN
          </Link>
          <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/417819642_887570966613647_7278906327901831061_n.jpg?_nc_cat=103&cb=99be929b-fc739e1c&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ynhnUYdju5wQ7kNvwGdbFVn&_nc_oc=Adl6atgTrjwlH0fZ9MpF7k-QMPS7LgpZ1ZdEWGHfHKZyr1R1tDrBnF8A6DNu-W68nsh4RCEZVkRcbQb-J-D0VSSC&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=VbDULoyJMGE9ahiV0Mpx7g&oh=00_AfU9sJW1MSv47ZzIvx4P6L2rQzJr4W_uEQxwzjVI-3feeQ&oe=68A8F17B" alt="BÙI NGỌC SƠN" className="w-12 h-12 rounded-full object-cover" />
        </div>
    <div className="mt-2 text-zinc-600 dark:text-zinc-500 text-base leading-relaxed">
            <div>26 năm chơi đàn, 17 năm giảng dạy</div>
            <div>Tốt nghiệp Nhạc Viện TP.HCM năm 2013</div>
            <div>Tác giả bộ giáo trình Đệm Đàn Guitar 14+ tập</div>
            <div>Giúp 11 bạn thi đậu Nhạc Viện, 2 bạn là thủ khoa</div>
            <div>Giảng dạy cho hơn 1200 học viên học guitar thành công</div>
          </div>
      </div>
    </header>
  )
}
