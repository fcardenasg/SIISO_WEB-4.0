export type PersonalInformationForm = {
	Idempresa: string;
	Prefijo: string;
	Consecutivo: string;
	Adiccional: string;
	Numerocontrato: string;
	idcategoria: string;
	idsubcategoria: string;
	Servicio: string;
	Idestadocontrato: string;
	Idsede: string;
	Numeroorden: string;
	Idcontratista: string;
	Fechainiciocontrato: string;
	Fechafincontrato: string;
	Idcomprador: string;
	Idadministrador: string;
};

export type BiddingForm = {
	Idestadolicitacion: string;
	Fechainiciolicitacion: string;
	Fechafinlicitacion: string;
};

export type CostsForm = {
	Costopresupuesto: string;
	Costocontrato: string;
	Idmoneda: string;
};

export type AccessAuthForm = {
	Id: string;
	Fecharegistro: string;
	Idusuario: string;
};


export type SiteForm = {
	Idsede: string;
};

export type ContractsForm = Pick<
	PersonalInformationForm,
	| "Idempresa"
	| "Prefijo"
	| "Consecutivo"
	| "Adiccional"
	| "Numerocontrato"
	| "idcategoria"
	| "idsubcategoria"
	| "Servicio"
	| "Idestadocontrato"
	| "Idsede"
	| "Numeroorden"
	| "Idcontratista"
	| "Fechainiciocontrato"
	| "Fechafincontrato"
	| "Idcomprador"
	| "Idadministrador"
> &
	BiddingForm &
	CostsForm &
	AccessAuthForm &
	SiteForm;