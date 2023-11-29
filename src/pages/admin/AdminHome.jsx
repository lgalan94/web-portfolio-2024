import { AdminNavbar } from '../../components';
import { SettingsContent } from './content'


const AdminHome = () => {
		return(
			<>
				<AdminNavbar />
				<div className="p-10">
				  <SettingsContent />
				</div>
			</>
	)
}

export default AdminHome