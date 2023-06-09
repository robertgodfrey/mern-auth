import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '#', current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="text-2xl text-white font-bold pe-3">
              MERN Prac
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link to='/sign-in' className="text-white me-3">Sign In</Link>
            <Link to='/sign-up' className="text-white ms-3">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
