export function capitalizeFirstLetter(texte: string): string {
    if (!texte) return ""; // Vérifier si la chaîne est vide
    return texte.charAt(0).toUpperCase() + texte.substring(1);
}


export class AppSportError extends Error {
  constructor(msg:string){
    super(msg);
  }
}

export class APLWarning extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Warning";
    console.warn(`⚠️ Warning: ${message}`); // Afficher dans la console
  }
}
