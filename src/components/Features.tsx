import { Check, Shield, User, Wallet } from "lucide-react";

const features = [
	{
		title: "Secure Escrow",
		description:
			"Funds are held in smart contracts until work is approved, ensuring security for both parties.",
		icon: Shield,
		image:
			"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
	},
	{
		title: "Zero Middlemen",
		description:
			"Connect directly with clients or freelancers without paying commission to intermediaries.",
		icon: User,
		image:
			"https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&h=200&fit=crop",
	},
	{
		title: "Multi-Chain Support",
		description:
			"Use Polygon, Ethereum or BSC for transactions based on your preference.",
		icon: Wallet,
		image:
			"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop",
	},
	{
		title: "Smart Contracts",
		description:
			"All agreements are encoded in transparent, immutable smart contracts on the blockchain.",
		icon: Check,
		image:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
	},
];

const Features = () => {
	return (
		<section className="py-20 bg-primary px-4">
			<div className="container mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
						How <span>DeFreelance</span> Works
					</h2>
					<p className="text-gray-300 max-w-2xl mx-auto">
						Our platform leverages blockchain technology to create a trustless
						environment for freelancers and clients.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<div
							key={feature.title}
							className="bg-secondary p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-accent/10 hover:border-accent/30"
						>
							<div className="mb-4 overflow-hidden rounded-lg">
								<img
									src={feature.image}
									alt={feature.title}
									className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="bg-white p-4 rounded-full inline-flex mb-6 group-hover:bg-accent transition-all duration-300">
								<feature.icon className="h-6 w-6 text-accent group-hover:text-white" />
							</div>
							<h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
								{feature.title}
							</h3>
							<p className="text-gray-300">{feature.description}</p>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<button
						className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg border-2 border-white bg-black text-white shadow-lg transition-all duration-300
             hover:text-white hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 active:scale-95"
						type="button"
						onClick={() => {
							const section = document.getElementById("how-it-works");
							if (section) {
								section.scrollIntoView({ behavior: "smooth" });
							} else {
								window.location.href = "how-it-works";
							}
						}}
					>
						Learn More About How It Works
					</button>
				</div>
			</div>
		</section>
	);
};

export default Features;