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
  [schema.config.NB_RECURRING_WEEK]: 15,
  [schema.config.BREAK_FROM]: '2018-03-05',
  [schema.config.BREAK_TO]: '2018-03-09'
};

// Events that will be repeated every weeks is defined here
const events = [
  {
    [header.TITLE]: 'Zumba Toning',
    [header.DATE_START]: '2018-01-08',
    [header.HOUR_START]: '18:15:00',
    [header.HOUR_END]: '19:15:00',
    [header.PLACE]: 'École de la clé-des-champs',
    [header.CATEGORY]: 'zumba-toning',
    [header.IMAGE]: '',
    [header.DESCRIPTION]:
      '<h2>QUOI APPORTER?</h2>- Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>- Chaque participant doit posséder ses propres Sticks Toning. <br/> Achat possible chez Astra Fitness au coût de 30$.<br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  },
  {
    [header.TITLE]: 'Toning/Fitness',
    [header.DATE_START]: '2018-01-09',
    [header.HOUR_START]: '17:15:00',
    [header.HOUR_END]: '18:15:00',
    [header.PLACE]: 'Coop Gym Santé Sutton',
    [header.CATEGORY]: 'Zumba Toning/Fitness',
    [header.IMAGE]: '',
    [header.DESCRIPTION]:
      '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>- Chaque participant doit posséder ses propres Sticks Toning pour le cours de Zumba Toning. <br/> Achat possible chez Astra Fitness au coût de 30$.<br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  },
  {
    [header.TITLE]: 'Zumba Fitness groupe Fadoq (Zumba Gold)',
    [header.DATE_START]: '2018-01-10',
    [header.HOUR_START]: '10:45:00',
    [header.HOUR_END]: '11:45:00',
    [header.PLACE]: 'Coop Gym Santé Sutton',
    [header.CATEGORY]: 'zumba-fitness-fadoq',
    [header.IMAGE]: '',
    [header.DESCRIPTION]:
      '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  },
  {
    [header.TITLE]: 'Toning/Fitness',
    [header.DATE_START]: '2018-01-10',
    [header.HOUR_START]: '12:00:00',
    [header.HOUR_END]: '13:00:00',
    [header.PLACE]: 'Coop Gym Santé Sutton',
    [header.CATEGORY]: 'Zumba Toning/Fitness',
    [header.IMAGE]: '',
    [header.DESCRIPTION]:
      '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>- Chaque participant doit posséder ses propres Sticks Toning pour le cours de Zumba Toning. <br/> Achat possible chez Astra Fitness au coût de 30$.<br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  },
  {
    [header.TITLE]: 'Zumba Fitness',
    [header.DATE_START]: '2018-01-11',
    [header.HOUR_START]: '18:15:00',
    [header.HOUR_END]: '19:15:00',
    [header.PLACE]: 'École de la clé-des-champs',
    [header.CATEGORY]: 'zumba-fitness',
    [header.IMAGE]: '',
    [header.DESCRIPTION]:
      '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  },
  {
    [header.TITLE]: 'Zumba Fitness',
    [header.DATE_START]: '2018-01-12',
    [header.HOUR_START]: '11:00:00',
    [header.HOUR_END]: '12:00:00',
    [header.PLACE]: "2eme étage de l'hôtel de ville de Freligsburg",
    [header.CATEGORY]: 'zumba-fitness',
    [header.IMAGE]: '',
    [header.DESCRIPTION]:
      '<h2>QUOI APPORTER?</h2> - Tenue légère de sport <br/>- Grande bouteille d\'eau <br/>- Espadrilles (bon soutien) <br/>- Petite serviette (facultatif) <br/>- Votre bonne humeur et votre plus beau sourire! <br/>*Se présenter 5 minutes à l\'avance en cours de session et 10 minutes lors de l\'inscription.<br/><br/>[contact-form-7 id="364" title="Formulaire reservation"]'
  }
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
      [header.PRICE]: 12,
      [header.CURRENCY]: '$',
      [header.CURRENCY_POSITION]: 'suffix'
    });
  });
}
