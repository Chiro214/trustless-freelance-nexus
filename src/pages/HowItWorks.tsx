import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";

const steps = [
	{
		number: "01",
		title: "Connect Your Wallet",
		description:
			"Start by connecting your Web3 wallet like MetaMask or WalletConnect. This serves as your identity on the platform.",
		image:
			"https://images.unsplash.com/photo-1618044733300-9472054094ee?w=400&h=300&fit=crop",
	},
	{
		number: "02",
		title: "Post or Find Jobs",
		description:
			"Clients can post jobs with detailed requirements and budget. Freelancers can browse and apply to jobs that match their skills.",
		image:
			"https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
	},
	{
		number: "03",
		title: "Escrow Funds",
		description:
			"When a freelancer is selected, the client deposits funds into a smart contract escrow that automatically executes based on predefined conditions.",
		image:
			"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
	},
	{
		number: "04",
		title: "Complete the Work",
		description:
			"Freelancers work on the project according to the agreed terms and submit deliverables through the platform.",
		image:
			"https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
	},
	{
		number: "05",
		title: "Release Payment",
		description:
			"Upon successful completion and client approval, the smart contract automatically releases payment to the freelancer.",
		image:
			"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
	},
];

const HowItWorks = () => {
	return (
		<div className="min-h-screen bg-black bg-gradient-to-br from-gray-900 via-black to-gray-950 relative">
			{/* 3D glassmorphism effect */}
			<div className="absolute inset-0 z-0 pointer-events-none">
				<div className="absolute top-20 left-1/4 w-2/3 h-96 bg-white/10 rounded-3xl blur-3xl opacity-30"></div>
				<div className="absolute bottom-0 right-0 w-1/3 h-64 bg-accent-light/20 rounded-full blur-2xl opacity-40"></div>
				<div className="absolute top-1/2 left-0 w-1/4 h-48 bg-blue-900/20 rounded-full blur-2xl opacity-30"></div>
			</div>
			<div className="relative z-10">
				<Navbar />

				{/* Add extra top padding to prevent overlap */}
				<div className="pt-40 pb-20">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
								How{" "}
								<span className="text-accent-light">DeFreelance</span> Works
							</h1>
							<p className="text-gray-300 max-w-2xl mx-auto">
								Our platform uses blockchain technology to create a transparent
								and trustless environment for freelancers and clients.
							</p>
						</div>

						<div className="relative max-w-6xl mx-auto">
							{/* Timeline line */}
							<div className="absolute left-1/2 top-0 h-full w-0.5 bg-accent-light bg-opacity-30 transform -translate-x-1/2"></div>

							{/* Timeline steps */}
							{steps.map((step, index) => (
								<div
									key={step.number}
									className="relative mb-16 flex flex-col md:flex-row items-center"
								>
									{/* Alternate sides for each step */}
									{index % 2 === 0 ? (
										<>
											{/* Left side card */}
											<div className="md:w-1/2 md:pr-12 md:flex md:justify-end">
												<div className="bg-secondary rounded-xl p-6 ml-auto max-w-md">
													<img
														src={step.image}
														alt={step.title}
														className="w-full h-48 object-cover rounded-lg mb-4"
													/>
													<h3 className="text-2xl font-bold text-white mb-4">
														{step.title}
													</h3>
													<p className="text-gray-300">
														{step.description}
													</p>
												</div>
											</div>
											{/* Timeline step number in the center */}
											<div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-accent-light text-white font-bold text-xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg border-4 border-white">
												{step.number}
											</div>
											{/* Empty right side */}
											<div className="md:w-1/2"></div>
										</>
									) : (
										<>
											{/* Empty left side */}
											<div className="md:w-1/2"></div>
											{/* Timeline step number in the center */}
											<div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-accent-light text-white font-bold text-xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg border-4 border-white">
												{step.number}
											</div>
											{/* Right side card */}
											<div className="md:w-1/2 md:pl-12 md:flex md:justify-start md:order-2">
												<div className="bg-secondary rounded-xl p-6 mr-auto max-w-md">
													<img
														src={step.image}
														alt={step.title}
														className="w-full h-48 object-cover rounded-lg mb-4"
													/>
													<h3 className="text-2xl font-bold text-white mb-4">
														{step.title}
													</h3>
													<p className="text-gray-300">
														{step.description}
													</p>
												</div>
											</div>
										</>
									)}
									{/* For mobile: step number above card */}
									<div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-accent-light text-white font-bold text-xl mb-4">
										{step.number}
									</div>
								</div>
							))}
						</div>

						<div className="max-w-4xl mx-auto bg-secondary rounded-xl p-8 mt-20 relative overflow-hidden">
							{/* Background subtle pattern */}
							<div className="absolute inset-0 opacity-5">
								<svg
									className="w-full h-full"
									viewBox="0 0 100 100"
									preserveAspectRatio="none"
								>
									<defs>
										<pattern
											id="grid"
											width="10"
											height="10"
											patternUnits="userSpaceOnUse"
										>
											<path
												d="M 10 0 L 0 0 0 10"
												fill="none"
												stroke="white"
												strokeWidth="0.5"
											/>
										</pattern>
									</defs>
									<rect
										width="100%"
										height="100%"
										fill="url(#grid)"
									/>
								</svg>
							</div>

							<div className="relative z-10">
								<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
									Smart Contract Security
								</h2>
								<p className="text-gray-300 mb-6">
									Our platform's smart contracts are audited by industry-leading
									security firms to ensure the safety of all user funds. The
									blockchain-based escrow system guarantees that freelancers get
									paid for completed work and clients receive the services they
									paid for.
								</p>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
									<div className="bg-primary p-4 rounded-lg">
										<h4 className="font-bold text-white">Automated Escrow</h4>
										<p className="text-black-400 text-sm">
											Funds are held in a secure smart contract until work
											completion.
										</p>
									</div>
									<div className="bg-primary p-4 rounded-lg">
										<h4 className="font-bold text-white">Dispute Resolution</h4>
										<p className="text-black-400 text-sm">
											Fair arbitration process for resolving disagreements.
										</p>
									</div>
									<div className="bg-primary p-4 rounded-lg">
										<h4 className="font-bold text-white">Low Gas Fees</h4>
										<p className="text-black-400 text-sm">
											Optimized contracts to minimize transaction costs.
										</p>
									</div>
								</div>

								<div className="bg-accent bg-opacity-10 border border-accent-light border-opacity-20 rounded-lg p-4 mb-6">
									<h4 className="text-white font-bold mb-2">
										Example Smart Contract Functionality:
									</h4>
									<pre className="bg-gray-800 p-3 rounded overflow-x-auto text-gray-300 text-sm">
										<code>
											{`function createJob(string memory title, uint amount) public {
  // Client creates job and deposits funds
}

function releasePayment(uint jobId) public {
  // Client approves work and releases payment
}`}
										</code>
									</pre>
								</div>
							</div>
						</div>
					</div>
				</div>

				<CallToAction />
				<Footer />
			</div>
		</div>
	);
};

export default HowItWorks;
