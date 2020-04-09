export const Dialog = ({ isOpen, telNumbers, emailContacts, closePopup }) => {
	return (
		<dialog 
			class="fixed inset-x-0 top-0 backdrop w-screen h-screen"
			style={{display: isOpen ? "initial" : "none"}}
			onClick={closePopup}
		>
			<div
				class="absolute w-5/6 max-w-screen-sm mx-auto bg-white rounded-lg p-6 shadow-lg"
				style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}
			>
				{telNumbers && (
					telNumbers.map(tel => (
						<a href={`tel:${tel}`} class="block rounded-lg bg-gray-200 p-5 text-lg font-semibold text-gray-700 my-5">
							<span
								class="inline-block mx-2 w-8 h-8 bg-green-300 text-center leading-8 rounded-lg cursor-pointer"
								role="img"
								aria-label="telephone"
							>
							📞
							</span>
							<span>{tel}</span>
						</a>
					))
				)}
				{emailContacts && (
					emailContacts.map(mail => (
						<a href={`mailto:${mail}`} class="block rounded-lg bg-gray-200 p-5 text-lg font-semibold text-gray-700 my-5">
							<span
								class="inline-block mx-1 md:mx-2 w-8 h-8 cursor-pointer text-center leading-8 bg-blue-300 rounded-lg"
								role="img"
								aria-label="e-mail"
							>
							✉️
							</span>
							<span>{mail}</span>
						</a>
					))
				)}
				<div class="w-full text-center">
					<button
						class="my-2 bg-red-500 inline-block hover:bg-red-700 text-white font-bold px-5 py-3 rounded"
						onClick={closePopup}
					>
						Chiudi
					</button>
				</div>
			</div>
		</dialog>
	);
};
