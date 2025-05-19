
import { Button } from "@/components/ui/button";

type JobCardProps = {
  id: number;
  title: string;
  description: string;
  price: string;
  category: string;
  deadline: string;
  clientName: string;
}

const JobCard = ({
  id,
  title,
  description,
  price,
  category,
  deadline,
  clientName
}: JobCardProps) => {
  return (
    <div className="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span className="bg-accent-light bg-opacity-20 text-accent-light px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex justify-between items-center mb-5">
          <div>
            <span className="text-accent-light font-bold text-xl">{price}</span>
            <span className="text-gray-400 text-sm ml-1">MATIC</span>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm">Due by:</p>
            <p className="text-white font-medium">{deadline}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center border-t border-gray-700 pt-4">
          <div>
            <p className="text-gray-400 text-sm">Posted by:</p>
            <p className="text-white font-medium">{clientName}</p>
          </div>
          <Button className="bg-accent-light text-primary hover:bg-accent hover:text-white">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
