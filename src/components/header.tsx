import { BusFront, CodeXml, Home, Radar, SeparatorHorizontal, User,  } from 'lucide-react';
import { AccountMenu } from './account-menu';
import { ThemeToggle } from './theme/ThemeToggle';
import { NavLink } from './nav-link';

const Header = () => {
  return (
    <div className="border-b">
            <div className="flex h-16 items-center gap-6 px-6">
                <CodeXml/>
                <SeparatorHorizontal orientation="horizontal" className="h-6 w-0.5 bg-gray-600" />


                <nav className="flex items-center  lg:space-x-6">
                <NavLink to="/" >
                    <Home className="h-4 w-4"/>
                    Inicio
                </NavLink>

                <NavLink to="/occurrences"  >
                    <BusFront className="h-4 w-4"/>
                    Ocorrencias
                </NavLink>
                <NavLink to="/tracking"  >
                    <Radar className="h-4 w-4"/>
                    Cco
                </NavLink>
                <NavLink to="/contacts"  >
                    <User className="h-4 w-4"/>
                    Contatos
                </NavLink>
            </nav>
            <div className="ml-auto flex items-center gap-2">
                <ThemeToggle/>
                <AccountMenu/>
            </div>
            </div>

    </div>
  )
}

export default Header