const schema = require('./schema');
const header = schema.csvHeader;

module.exports = {
  getConfig,
  generateCompleteEvents
};

function getConfig() {
  return {
    general,
    events
  };
}

// Global config to generate reccuring events
const general = {
  [schema.config.SESSION_NAME]: 'automne-2019',
  [schema.config.NB_RECURRING_WEEK]: 6,
  [schema.config.BREAK_FROM]: null,
  [schema.config.BREAK_TO]: null
};

const venues = {
  CAMP_GARAGONA: 2876,
  HOTEL_VILLE_FRELIGSBURG: 158,
  ECOLE_CLE_DES_CHAMPS: 48,
  COOP_GYM_SANTE_SUTTON: 157,
  KNOWLTON: 3738,
  SALLE_ALEC_PELLETIER: 4214,
  ECOLE_SAINT_EDOUARD: 4215,
  BALLET_CLASSIQUE: 4216,
  CHALET_PLAGE_COWANSVILLE: 4497,
  CENTRE_AQUATIQUE_COWANSVILLE: 4498,
}

// Events that will be repeated every weeks is defined here
const events = [
  // {
  //   [header.TITLE]: 'Zumba Fitness',
  //   [header.DATE_START]: '2019-09-16',
  //   [header.HOUR_START]: '18:15:00',
  //   [header.HOUR_END]: '19:15:00',
  //   [header.PLACE]: venues.ECOLE_CLE_DES_CHAMPS,
  //   [header.CATEGORY]: 'zumba-fitness',
  //   [header.IMAGE]: '',
  //   [header.DESCRIPTION]:
  //     '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  // },
  // {
  //   [header.TITLE]: 'Toning/Fitness',
  //   [header.DATE_START]: '2019-09-17',
  //   [header.HOUR_START]: '9:00:00',
  //   [header.HOUR_END]: '10:00:00',
  //   [header.PLACE]: venues.HOTEL_VILLE_FRELIGSBURG,
  //   [header.CATEGORY]: 'Zumba Toning/Fitness',
  //   [header.IMAGE]: '',
  //   [header.DESCRIPTION]:
  //     '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>- Chaque participant doit posséder ses propres Sticks Toning pour le cours de Zumba Toning. <br/> Achat possible chez Astra Fitness au coût de 30$.<br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  // },
  // {
  //   [header.TITLE]: 'Zumba Fitness/Strong',
  //   [header.DATE_START]: '2019-09-18',
  //   [header.HOUR_START]: '18:00:00',
  //   [header.HOUR_END]: '19:00:00',
  //   [header.PLACE]: venues.KNOWLTON,
  //   [header.CATEGORY]: 'zumba-strong',
  //   [header.IMAGE]: '',
  //   [header.DESCRIPTION]:
  //     '<h2>QUOI APPORTER?</h2>- Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Se munir d\'un tapis de sol (style Yoga) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  // },
  // {
  //   [header.TITLE]: 'Toning/Fitness',
  //   [header.DATE_START]: '2019-09-19',
  //   [header.HOUR_START]: '9:00:00',
  //   [header.HOUR_END]: '10:00:00',
  //   [header.PLACE]: venues.ECOLE_CLE_DES_CHAMPS,
  //   [header.CATEGORY]: 'Zumba Toning/Fitness',
  //   [header.IMAGE]: '',
  //   [header.DESCRIPTION]:
  //     '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>- Chaque participant doit posséder ses propres Sticks Toning pour le cours de Zumba Toning. <br/> Achat possible chez Astra Fitness au coût de 30$.<br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  // },
  {
    [header.TITLE]: 'Zumba Fitness',
    [header.DATE_START]: '2019-11-04',
    [header.HOUR_START]: '18:15:00',
    [header.HOUR_END]: '19:15:00',
    [header.PLACE]: venues.ECOLE_CLE_DES_CHAMPS,
    [header.CATEGORY]: 'zumba-fitness',
    [header.IMAGE]: '',
    [header.DESCRIPTION]:
      '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  },
  {
    [header.TITLE]: 'Zumba Fitness',
    [header.DATE_START]: '2019-11-05',
    [header.HOUR_START]: '9:00:00',
    [header.HOUR_END]: '10:00:00',
    [header.PLACE]: venues.HOTEL_VILLE_FRELIGSBURG,
    [header.CATEGORY]: 'zumba-fitness',
    [header.IMAGE]: '',
    [header.DESCRIPTION]:
      '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  },
  {
    [header.TITLE]: 'Zumba Fitness/Strong',
    [header.DATE_START]: '2019-11-06',
    [header.HOUR_START]: '18:00:00',
    [header.HOUR_END]: '19:00:00',
    [header.PLACE]: venues.KNOWLTON,
    [header.CATEGORY]: 'zumba-strong',
    [header.IMAGE]: '',
    [header.DESCRIPTION]:
      '<h2>QUOI APPORTER?</h2>- Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Se munir d\'un tapis de sol (style Yoga) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  },
  {
    [header.TITLE]: 'Strong by Zumba',
    [header.DATE_START]: '2019-11-07',
    [header.HOUR_START]: '9:00:00',
    [header.HOUR_END]: '10:00:00',
    [header.PLACE]: venues.ECOLE_CLE_DES_CHAMPS,
    [header.CATEGORY]: 'zumba-strong',
    [header.IMAGE]: '',
    [header.DESCRIPTION]:
      '<h2>QUOI APPORTER?</h2>- Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Se munir d\'un tapis de sol (style Yoga) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  },
  // {
  //   [header.TITLE]: 'Toning/Fitness',
  //   [header.DATE_START]: '2019-01-14',
  //   [header.HOUR_START]: '9:30:00',
  //   [header.HOUR_END]: '10:30:00',
  //   [header.PLACE]: venues.SALLE_ALEC_PELLETIER,
  //   [header.CATEGORY]: 'Zumba Toning/Fitness',
  //   [header.IMAGE]: '',
  //   [header.DESCRIPTION]:
  //     '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>- Chaque participant doit posséder ses propres Sticks Toning pour le cours de Zumba Toning. <br/> Achat possible chez Astra Fitness au coût de 30$.<br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  // },
  // {
  //   [header.TITLE]: 'Toning/Fitness',
  //   [header.DATE_START]: '2019-04-22',
  //   [header.HOUR_START]: '18:15:00',
  //   [header.HOUR_END]: '19:15:00',
  //   [header.PLACE]: venues.ECOLE_CLE_DES_CHAMPS,
  //   [header.CATEGORY]: 'Zumba Toning/Fitness',
  //   [header.IMAGE]: '',
  //   [header.DESCRIPTION]:
  //     '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>- Chaque participant doit posséder ses propres Sticks Toning pour le cours de Zumba Toning. <br/> Achat possible chez Astra Fitness au coût de 30$.<br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  // },
  // {
  //   [header.TITLE]: 'Toning/Fitness',
  //   [header.DATE_START]: '2019-04-23',
  //   [header.HOUR_START]: '9:00:00',
  //   [header.HOUR_END]: '10:00:00',
  //   [header.PLACE]: venues.CAMP_GARAGONA,
  //   [header.CATEGORY]: 'Zumba Toning/Fitness',
  //   [header.IMAGE]: '',
  //   [header.DESCRIPTION]:
  //     '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>- Chaque participant doit posséder ses propres Sticks Toning pour le cours de Zumba Toning. <br/> Achat possible chez Astra Fitness au coût de 30$.<br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  // },
  // {
  //   [header.TITLE]: 'Zumba Fitness groupe Fadoq (Zumba Gold)',
  //   [header.DATE_START]: '2019-01-16',
  //   [header.HOUR_START]: '10:45:00',
  //   [header.HOUR_END]: '11:45:00',
  //   [header.PLACE]: venues.BALLET_CLASSIQUE,
  //   [header.CATEGORY]: 'zumba-fitness-fadoq',
  //   [header.IMAGE]: '',
  //   [header.DESCRIPTION]:
  //     '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles intérieur <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  // },
  // {
  //   [header.TITLE]: 'Danse Fitness avec bébé',
  //   [header.DATE_START]: '2019-04-22',
  //   [header.HOUR_START]: '10:30:00',
  //   [header.HOUR_END]: '11:30:00',
  //   [header.PLACE]: venues.CHALET_PLAGE_COWANSVILLE,
  //   [header.CATEGORY]: 'zumba-fitness-bébé',
  //   [header.IMAGE]: '',
  //   [header.DESCRIPTION]:
  //     '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  // },
  // {
  //   [header.TITLE]: 'Strong 30 minutes hiit',
  //   [header.DATE_START]: '2019-04-24',
  //   [header.HOUR_START]: '12:15:00',
  //   [header.HOUR_END]: '12:45:00',
  //   [header.PLACE]: venues.CENTRE_AQUATIQUE_COWANSVILLE,
  //   [header.CATEGORY]: 'zumba-fitness',
  //   [header.IMAGE]: '',
  //   [header.DESCRIPTION]:
  //     '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  // },
  // {
  //   [header.TITLE]: 'Zumba Fitness',
  //   [header.DATE_START]: '2019-04-24',
  //   [header.HOUR_START]: '18:00:00',
  //   [header.HOUR_END]: '19:00:00',
  //   [header.PLACE]: venues.ECOLE_SAINT_EDOUARD,
  //   [header.CATEGORY]: 'zumba-fitness',
  //   [header.IMAGE]: '',
  //   [header.DESCRIPTION]:
  //     '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  // },
  // {
  //   [header.TITLE]: 'Zumba Strong',
  //   [header.DATE_START]: '2019-04-25',
  //   [header.HOUR_START]: '18:15:00',
  //   [header.HOUR_END]: '19:15:00',
  //   [header.PLACE]: venues.ECOLE_CLE_DES_CHAMPS,
  //   [header.CATEGORY]: 'zumba-strong',
  //   [header.IMAGE]: '',
  //   [header.DESCRIPTION]:
  //     '<h2>QUOI APPORTER?</h2>- Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Se munir d\'un tapis de sol (style Yoga) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  // },
  // {
  //   [header.TITLE]: 'Zumba Strong',
  //   [header.DATE_START]: '2019-01-18',
  //   [header.HOUR_START]: '9:15:00',
  //   [header.HOUR_END]: '10:15:00',
  //   [header.PLACE]: venues.KNOWLTON,
  //   [header.CATEGORY]: 'zumba-strong',
  //   [header.IMAGE]: '',
  //   [header.DESCRIPTION]:
  //     '<h2>QUOI APPORTER?</h2>- Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Se munir d\'un tapis de sol (style Yoga) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>- Vous devez vous inscrire sur le site de la ville de Knowlton <br/>*Se présenter 5 minutes à l\'avance en cours de session.<br/><br/>'
  // }
];

// Aggregate repeating information
function generateCompleteEvents(events) {
  return events.map(event => {
    const buttonShortcode = `[fusion_button link="?add-to-cart=253&date=${
      event[header.DATE_START]
      }" color="default" size=color="default" size="medium" stretch="" type="" shape="" target="_self" title="" gradient_colors="|" gradient_hover_colors="|" accent_color="" accent_hover_color="" bevel_color="" border_width="1px" icon="" icon_divider="yes" icon_position="left" modal="" animation_type="0" animation_direction="down" animation_speed="0.1" animation_offset="" alignment="right" class="" id=""]Ajouter un cours au panier[/fusion_button]`;
    return Object.assign(event, {
      [header.DATE_END]: event[header.DATE_START],
      [header.DESCRIPTION]: buttonShortcode + event[header.DESCRIPTION],
      [header.SHOW_PLACE_MAP]: 1,
      [header.SHOW_MAP]: 1,
      [header.PRICE]: 14,
      [header.CURRENCY]: '$',
      [header.CURRENCY_POSITION]: 'suffix'
    });
  });
}
