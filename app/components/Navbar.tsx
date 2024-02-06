import React from 'react'

type Props = {
  setPage: (val: string) => void;
};

const Navbar: React.FC<Props> = ({ setPage })  => {
  return (
    <nav className='navbar'>
        <button onClick={() => setPage('planets')}>Planet</button>
        <button onClick={() => setPage('people')}>People</button>
    </nav>
)
}

export default Navbar