export type PersonalInformationForm = {
  FileType: string;
	ID: string;
  Documento: string;
	Nombres: string;
	FechaNaci: string;
  Genero: string;
  Escolarida: string;
  Celular: string;
  Email: string;
  Contacto: string;
	TelefonoContacto: string;
	EstadoCivil: string;
	Empresa: string;
  Sede: string;
  PayStatus: string;
  ImagenUr: string;
  UsuarioCreacion: string;
	FechaCreacion: string;
  UsuarioModifica: string;
	FechaModificacion: string;
  Bandera: string;
};

export type SocialsecurityForm = {
  Eps: string;
	Afp: string;
  Arp: string;
  Cesantias: string;
};

export type DemographicinformationForm = {
  DptoNacido: string;
  MunicipioNacido: string;
  DptoResidencia: string;
  MunicipioResidencia: string;
  DireccionResidencia: string;

};

export type ContractualInformationForm = {
  Type: string;
  TipoContrato: string;
  FechaContrato: string;
	RosterPosition: string;
	GeneralPosition: string;
  Departamento: string;
	Area: string;
	SubArea: string;
	Grupo: string;
  Turno: string;
  Rotation: string;

};

export type AccessAuthForm = {
  TermDate: string;
	MaritalStats: string;
	Ges: string;
	Notificado: string;
	QRGenerado: string;
	FechaNotificacion: string;
	FechaRegiistroCenso: string;
	Home: string;
	Shift: string;
	Departamentohome: string;
	departamentoshift: string;
	Idactividalaboral: string;
	FechaInicioVisita: string;
	FechaFinVisita: string;
	Visitante: string;
	VisitanteNotificado: string;
	PrimerApellido: string;
	SegundoApellido: string;
	PrimerNombre: string;
	SegundoNombre: string;
};

export type SiteForm = {
  Sede: string;
};

export type EmployeeForm = Pick<
  PersonalInformationForm,
  | "FileType"
	| "ID"
  | "Documento"
	| "Nombres"
	| "FechaNaci"
  | "Genero"
  | "Escolarida"
  | "Celular"
  | "Email"  
  | "Contacto"
	| "TelefonoContacto"
	| "EstadoCivil"
	| "Empresa"
  | "Sede"
  | "PayStatus"
  | "ImagenUr"
  | "UsuarioCreacion"
	| "FechaCreacion"
  | "UsuarioModifica"
	| "FechaModificacion"
  | "Bandera"
> &
  SocialsecurityForm &
  DemographicinformationForm &
  ContractualInformationForm &
  AccessAuthForm &
  SiteForm;
