import { Card, Chip, Typography, Button } from '@material-tailwind/react'

const AdminLayout = ({ className, children, handleClick, chipClass, count, buttonName, buttonIcon }) => {
		return (
				<div className={`${className}py-0 lg:py-6 mx-auto pr-0 lg:pr-10 w-full h-full`}> 
						<Card className="">
							<div className="flex items-center justify-between p-1 border shadow border-b-gray-900/10 gap-x-1">
							  <Chip variant="ghost" value={count} className={`${chipClass} rounded-md`} />
							  <Button
							    variant="text"
							    size="sm"
							    className=""
							    onClick={handleClick}
							  >
							    <span className="flex items-center gap-1 lowercase">{buttonIcon} {buttonName}</span>
							  </Button>
							</div>
							<div className="px-10 py-6 h-full w-full max-h-[92vh] min-h-[92vh] lg:max-h-[80vh] lg:min-h-[80vh] overflow-y-auto mx-auto">
									{children}
								</div>
						</Card>	
				</div>
		)
}

export default AdminLayout;