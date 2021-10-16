export type PersonalInformationForm = {
  Documento: string;
  Nombres: string;
  Email: string;
  Celular: string;
  Vacunado: boolean;
  Idlaboratorio: string;
  Dosis: string;
  Fecha1raDosis: string;
  Fecha2daDosis: string;
};

export type HealthDeclarationForm = {
  PersonalMedico: string;
  ObsPersonalMedico: string;
  AdultosMayores: string;
  ObsAdultosMayores: string;
  Observacioncenso: string;
  ContactoPersonaId: string;
  ServicioSaludId: string;
};

export type CurrentSymptomsForm = {
  Fiebre: string;
  ObsFiebre: string;
  Tos: string;
  ObsTos: string;
  DificultadRespiratoria: string;
  ObsDificultadRespiratoria: string;
  DolorGarganta: string;
  ObsDolorGarganta: string;
  Vomito: string;
  ObsVomito: string;
  Fatiga: string;
  ObsFatiga: string;
  Escalofrio: string;
  ObsEscalofrio: string;
  MalestarGeneral: string;
  ObsMalestarGeneral: string;
  CongestionNasal: string;
  ObsCongestionNasal: string;
  OtrosSintomas: string;
  FechaInicioSintomas: string;
};

export type CloseContactForm = {
  ContactoConE: string;
  Observacion: string;
  ContactoSinTapabocas: string;
  Distancia2Metros: string;
  MasDe15Min: string;
  SinLavadodeManos: string;
  CosultadoEps: string;
  CumplioTiempoAislamiento: string;
};

export type AccessAuthForm = {
  AutorizaIngesoTurno: string;
  OrdenAislamiento: string;
};

export type SiteForm = {
  Sede: string;
};

export type QuestionCovidForm = Pick<
  PersonalInformationForm,
  | "Documento"
  | "Vacunado"
  | "Dosis"
  | "Fecha1raDosis"
  | "Fecha2daDosis"
  | "Idlaboratorio"
> &
  HealthDeclarationForm &
  CurrentSymptomsForm &
  CloseContactForm &
  AccessAuthForm &
  SiteForm;
