import React, { useEffect, useState } from 'react';
const reqs = [
  ['زملكا', '2021-11-05', 'تنزيل'],
  ['حرستا', '2021-012-01', 'تنزيل'],
];
const pastHead = ['المستودع', 'التاريخ', 'العملية', 'الحالة'];
const past = [
  ['مسرابا', '2021-11-05', 'مناقلة', 'موافقة'],
  ['حرستا', '2022-01-01', 'تنزيل', 'رفض'],
];
const Comp = () => {
  return (
    <div className="  bg-gradient-to-br from-red-400 to-red-700 h-screen text-white font-sans text-xl">
      wareHouse Volunteer
      <div>الترحيب</div>
      <div>
        <span className="text-2xl text-center">
          الطلبات التي بحاجة إلى موافقة
        </span>
      </div>
      <div>جدول الدوام</div>
      <div>الانجازات السابقة</div>
    </div>
  );
};

export default Comp;
