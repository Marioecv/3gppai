"use client";

import { User } from "lucide-react";
import AdiumChat, { AdiumChatHandle } from "@/components/3gppchat";
import AuthModal from "@/components/AuthModal";
import Image from "next/image";
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [userInitial, setUserInitial] = useState<string | null>(null);
  const [accionPendiente, setAccionPendiente] = useState<"anfitrion" | "clara" | "anuncia" | null>(null);
  const [mostrarClaraChat, setMostrarClaraChat] = useState(false);
  const [renderizarClaraChat, setRenderizarClaraChat] = useState(false)
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [mostrarAuthModal, setMostrarAuthModal] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserNameId] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [mensajeInicialClara, setMensajeInicialClara] = useState<string | null>(null);
  const [chatActivo, setChatActivo] = useState<"clara" | "lia">("clara");
  const videoRef = useRef<HTMLVideoElement>(null);
 
  const chatRef = useRef<AdiumChatHandle>(null);

	useEffect(() => {
	if (mostrarMenu) {
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'auto';
	}
	}, [mostrarMenu]);

  return (
    <div className="h-screen bg-white flex flex-col">
      	{/* Header principal */}
		<header className="
			w-full h-max border-b shadow-sm px-4 sticky top-0 border-gray-200 z-[999]
			bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(210,235,255,0.45)_40%,rgba(135,206,250,0.25)_100%)] bg-center bg-no-repeat bg-[length:100%_100%]
			">
			  	<div className="w-full mt-0 px-0 py-0 relative mb-0 md:mb-0">
					{/* Logo y botón IA */}
					<div className="flex items-center justify-between mb-0 w-full">
						<div className="flex items-center justify-between w-full flex-nowrap overflow-x-auto gap-0 px-0 py-2">
							<video
								ref={videoRef}
								src="/Logo3GPPSpecPilot3.webm"
								autoPlay
								muted
								playsInline
								disablePictureInPicture
								controlsList="nodownload nofullscreen noplaybackrate"
								className="
									flex items-center justify-center
									max-w-[350px]
									w-full
									h-auto
									object-contain
								"
							/>


							{/* Botones Modo y Menú usuario */}
							<div className="flex items-center gap-2">
								<div className="relative ml-0 mr-3 z-[70]" ref={menuRef}>
									<button
										onClick={() => setMostrarMenu(!mostrarMenu)}
										className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold hover:opacity-90 ${token ? 'bg-gray-800 text-white' : 'bg-white text-black border border-gray-300'}`}
										title="Menú de usuario"
										>
										{userInitial ? (
										userInitial
										) : (
										<User size={20} className={token ? "text-white" : "text-black"} />
										)}
									</button>

									{mostrarMenu && (
										<div className="fixed top-14 right-6 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-[100]">
											<ul className="text-sm text-gray-700">
												{token ? (
														<li
															className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
															onClick={() => {
															setToken(null);
															setUserId(null);
															setUserInitial(null);
															localStorage.removeItem("token");
															localStorage.removeItem("user_id");
															localStorage.removeItem("user_name");
															localStorage.removeItem("user_email");
															setRenderizarClaraChat(false);
															setMostrarClaraChat(false);
															setMostrarMenu(false);
															}}
															>
															Cerrar sesión
														</li>
													) : (
														<li
															className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
															onClick={() => {	
															setMostrarAuthModal(true);
															setMostrarMenu(false);
															}}
															>
															Iniciar sesión / Crear cuenta
														</li>
													)
												}
												<hr className="my-1 mx-3 border-gray-300" />
												<li
													className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
													onClick={() => {
														setMostrarMenu(false);
														if (!token) {
														setAccionPendiente("clara");
														setMostrarAuthModal(true);
														} else {
														if (!renderizarClaraChat) setRenderizarClaraChat(true);
														setMostrarClaraChat(true);
														}
													}}
													>
													Chatea con SpecPilot 3GPP
												</li>
												<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Acerca de SpecPilot 3GPP</li>
											</ul>
										</div>
									)}
								</div>

						</div>
					</div>
				</div>
			</div>
      	</header>



		{renderizarClaraChat && (
			<div className={mostrarClaraChat ? "block overflow-y-hidden flex-1 h-full" : "hidden"}>
				<div className="flex-1 h-full flex flex-col lg:flex-row justify-center gap-6 mt-2 px-0">
					<div className="flex-1 flex flex-col min-h-0 relative w-full lg:w-5/5">
						<button
							onClick={() => setMostrarClaraChat(false)}
							className="absolute right-3 top-0 text-gray-400 hover:text-red-500 text-2xl font-bold z-10"
							title="Cerrar"
							>
							×
						</button>			
						{chatActivo === "clara" && (
							<AdiumChat
								ref={chatRef}
								initialMessage={mensajeInicialClara ?? undefined} userId={userId} userName={userName} token={token}
							/>	
						)}						
					</div>	
				</div>
			</div>
		)}

		{/* Mensaje de bienvenida */}
		{mostrarAuthModal && (
			<AuthModal
				onClose={() => {
					setMostrarAuthModal(false);
					setAccionPendiente(null);
			}}
			onAuthSuccess={(token, user_name, user_id) => {
				setToken(token);
				setUserId(user_id);
				setUserNameId(user_name);
				// Por ahora, saquemos la inicial del email del localStorage
				const email = localStorage.getItem("user_email"); // asegúrate de guardarlo ahí en AuthModal
				if (email) {
						setUserInitial(email[0].toUpperCase());
				}
				setMostrarAuthModal(false);

				if (accionPendiente === "clara") {
					setMostrarClaraChat(true);
					setRenderizarClaraChat(true);
				}

				setAccionPendiente(null); // limpiamos el estado
			}}
			/>
		)}

    </div>
  );
}

