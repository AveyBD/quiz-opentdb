import React from "react";

const Profile = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img
                  src="https://api.lorem.space/image/face?w=150&h=150"
                  className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div className="w-full text-center mt-20">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {localStorage.getItem("total") || 0}
                  </span>
                  <span className="text-sm text-slate-400">Total Score</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {localStorage.getItem("attempt") || 0}
                  </span>
                  <span className="text-sm text-slate-400">Attempts</span>
                </div>

                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {localStorage.getItem("lastScore") || 0}
                  </span>
                  <span className="text-sm text-slate-400">Last Score</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {localStorage.getItem("user") || "No User"}
            </h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              last Played On: {localStorage.getItem('played')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
