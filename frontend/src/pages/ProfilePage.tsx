const ProfilePage = () => {
  return (
    <div className=" custom-container  ">
      <div className="grid md:grid-cols-1 lg:grid-cols-[30%_65%] gap-8">
        <header className="col-span-full bg-blue-200 ">
          Header spans 100%
        </header>
        <header className=" bg-blue-200 ">Header spans 100%</header>
      </div>
    </div>
  );
};

export default ProfilePage;
