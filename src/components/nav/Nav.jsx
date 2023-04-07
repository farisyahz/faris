import React, {useState, useEffect} from 'react'
import './Nav.css'
import { Link, useLocation} from 'react-router-dom'

const Nav = () => {
  const {pathname} = useLocation();
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    
    const li = document.querySelectorAll('.navbar nav ul li');
    li.forEach(e => e.classList.remove('in'));
    if(pathname === '/about'){
      document.getElementById('li1').classList.toggle('in');
    }else if(pathname === '/blog'){
      document.getElementById('li2').classList.toggle('in');
    }else if(pathname === '/projects'){
      document.getElementById('li3').classList.toggle('in');
    }else if(pathname === '/pictures'){
      document.getElementById('li4').classList.toggle('in');
    }
  });

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [pathname])

  const darkModeHandler = () => {
    document.body.classList.toggle('dark');
    setDark(!dark);
  }

  const barHandler = () => {
    setActive(!active);
    document.body.classList.toggle('lock-scroll')
    document.getElementById('bar').classList.toggle('active');
  }

  return (
    <>
      <div className='navbar'>
        <nav>
          <Link to='/' className='link mobile'>
              <div className="name-mobile">
                <img src="./img/laptop.png" alt="laptop" />
                <h2>Faris Syahzani</h2>
              </div>
          </Link>
          <ul>
            <Link to='/' className='link'>
              <div className="name">
                <img src="./img/laptop.png" alt="laptop" />
                <h2>Faris Syahzani</h2>
              </div>
            </Link>
            <Link to='/about' className='link'>
              <li id='li1'>About</li>
            </Link>
            <Link to='/blog' className='link'>
              <li id='li2'>Blog</li>
            </Link>
            <Link to='/projects' className='link'>
              <li id='li3'>Projects</li>
            </Link>
            <Link to='/pictures' className='link'>
              <li id='li4'>Pictures</li>
            </Link>
            <a href='https://github.com/farisyahz' target='_blank' className='link'>
              <li id='li5' className='github'>Github<i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></li>
            </a>
          </ul>
          <button className="darkmode" onClick={darkModeHandler}>
            {dark ? <p>Dark</p> : <p>Light</p>}
            {dark ? <i class="fa-solid fa-moon fa-xl"></i> : <i class="fa-solid fa-sun fa-xl"></i>}
          </button>
          <button id='bar' className="bar" onClick={barHandler}>
            {active ? <i class="fa-solid fa-xmark fa-2xl"></i> : <i class="fa-solid fa-bars fa-2xl"></i>}
          </button>
        </nav>
      </div>

      <div className={active ? 'navMobile on' : 'navMobile'}>
        <div className="nav-wrapper">
          <ul>
            <Link to='/about' className='link'>
              <li onClick={barHandler}>About</li>
            </Link>
            <Link to='/blog' className='link'>
              <li onClick={barHandler}>Blog</li>
            </Link>
            <Link to='/projects' className='link'>
              <li onClick={barHandler}>Projects</li>
            </Link>
            <Link to='/pictures' className='link'>
              <li onClick={barHandler}>Pictures</li>
            </Link>
            <a href='https://github.com/farisyahz' target='_blank' className='link'>
              <li onClick={barHandler} className='github'>Github<i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i></li>
            </a>
          </ul>
          <button className="darkmode" onClick={darkModeHandler}>
            {dark ? <p>Dark</p> : <p>Light</p>}
            {dark ? <i class="fa-solid fa-moon fa-xl"></i> : <i class="fa-solid fa-sun fa-xl"></i>}
          </button>
        </div>
      </div>
    </>
  )
}

export default Nav