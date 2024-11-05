import { ImStatsBars } from 'react-icons/im';

function Nav() {
    return (
      <header className='container max-w-2xl px-6 py-6 mx-auto'>
        <div className="flex items-center justify-between">
          {/*User Info */}
          <div className="flex items-center gap-2">
            {/* img */}
            <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
              <img
                className="object-cover w-full h-full" 
                src="/images/rdplogo.png" 
                alt="Profile image"
              />
            </div>
            
  
            {/* name */}
            <small>Hi, Mark!</small>
          </div>
  
          {/* right side of navigation */}
          <nav className="flex items-center gap-5">
            <div>
              <ImStatsBars className="text-2xl"/>
            </div>
            <button className='btn btn-danger'>Logout</button>
          </nav>
        </div>
      </header>
    )
}

export default Nav;