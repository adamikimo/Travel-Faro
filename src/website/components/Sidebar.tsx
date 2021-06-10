import React, { useState }from 'react';
import SidebarRow from './SideBarRow';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ShopIcon from '@material-ui/icons/Shop';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import '../css/Sidebar.css';
import '../css/SideBarRow.css';
import '../css/index.css';

interface Props{
    visible?: string;
    onClick?: any;
}

const Sidebar: React.FC<Props> = ({visible, onClick}) => {
  const [appear, setAppear] = useState(false);
    return (
        <>
        <div
        className={`sidebar ${visible}`}
        >
            <SidebarRow 
            path='/'
            Icon={<HomeIcon />}
            Title='Home'
            onClick={onClick}
            />
            <SidebarRow 
            path='/porque travel faro'
            Icon={<InfoIcon />}
            Title='Porque Travel Faro'
            onClick={onClick}
            />
            <div
            className='excurtions__sidebarRows'
            >
            <div
            className='sidebarRow'
            style={{
                cursor: 'pointer'
            }}
            onMouseEnter={() => setAppear(true)}
            onMouseLeave={() => setAppear(false)}
            >
            <div
            className='sidebarRow__body'
            >
                <div
                className='sidebarRow__icon'
                >
                    <ShopIcon />
                </div>
                <h3
                className='sidebarRow__title'
                >
                    Excurtions
                </h3>
            </div>
            </div>
            </div>
            <SidebarRow 
            path='/Paquetes'
            Icon={<ShopTwoIcon />}
            Title='Paquetes'
            onClick={onClick}
            />
            <SidebarRow 
            path='/transportations'
            Icon={<AirportShuttleIcon />}
            Title='Traslados'
            onClick={onClick}
            />
            <SidebarRow 
            path='/contactenos'
            Icon={<ContactMailIcon />}
            Title='Contactenos'
            onClick={onClick}
            />
        </div>
        <div
            className={`excurtions__sidebar ${appear === false ? 'hidden' : 'block'}`}
            onMouseEnter={() => setAppear(true)}
            onMouseLeave={() => setAppear(false)}
            onClick={onClick}
        >
                <SidebarRow 
                path='/cards/excurtions/elCairo'
                Title='El Cairo'
                onClick={() => setAppear(false)}
                />
                <SidebarRow 
                Title='Aswan'
                path='/cards/excurtions/aswan'
                onClick={() => setAppear(false)}
                />
                <SidebarRow 
                Title='Hurgada'
                path='/cards/excurtions/hurgada'
                onClick={() => setAppear(false)}
                />
                <SidebarRow
                Title='Luxor' 
                path='/cards/excurtions/luxor'
                onClick={() => setAppear(false)}
                />
                <SidebarRow 
                Title='Sharm El Sheikh'
                path='/cards/excurtions/sharmElSheikh'
                onClick={() => setAppear(false)}
                />
            </div>
        </>
    )
}

export default Sidebar;
