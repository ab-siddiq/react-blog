import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className="flex justify-between items-center border-b-2 mx-4 p-2 mb-5">
            <h1 className='text-3xl font-bold'>Knowledge Hub</h1>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;