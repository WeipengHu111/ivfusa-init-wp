// BlankPage.js
import React from 'react';
import clinic_LA from '../../assets/clinic_LA.jpg';

const Blank_burger = () => {

  const containerStyle = {
    background: `url(${clinic_LA})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div style={containerStyle} className="bg-cover bg-center h-screen relative">
      <div className="absolute inset-y-0 right-0 flex flex-col justify-center items-end text-right p-4 pr-16">
        <h1 className="text-6xl font-bold py-4">
          让梦想成真
        </h1>
        <p className="text-xl sm:text-2xl md:text-4xl font-bold py-4">
          —— 您的专属生育专家
        </p>
        <p className="text-xl md:text-2xl font-bold">
          拥有世界级生殖专家、法律顾问及第三方生殖服务机构资源,
          <br className="hidden md:block" />
          丰富的行业经验，已成功助力众多家庭，
          <br className="hidden md:block" />
          为您提供尊贵的管家式服务，助您实现梦想。
        </p>
      </div>
    </div>
  );
};

export default Blank_burger;
