import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        date: new Date(2017, 5, 20),
        boardGame: {
          id: 'b70ef012-3511-49b0-a5a5-800fafeac349',
          name: "Blood Rage",
          language: "Dutch",
          weight: 3,
          description: "Blooood RAAAAGE!"
        },
        organisator: {
          id: '99e201ef-3c17-4d8d-a84b-89b26fafe48d',
          fullName: "Benjamin Demolder",
          intro: "Kitties! Kitties! Kitties!",
          age: 29
        },
        location: {
          id: '6a63e160-ad0c-4be8-87fa-fedbf4b4a499',
          city: "Merelbeke",
          street: "Gaversesteenweg"
        },
        filling: {
          current: 1,
          max: 4
        }
      },
      {
        date: new Date(2017, 5, 22),
        boardGame: {
          id: '5b082778-e44e-487a-83f3-44a1fb6b271a',
          name: "Terra Mystica",
          language: "English",
          weight: 4,
          description: "Fun Game! I Needz it."
        },
        organisator: {
          id: '747516a1-3673-4c6d-ba9f-d77743dd7969',
          fullName: "Fake Name",
          intro: "Kitties! Kitties! Kitties! 2",
          age: 30
        },
        location: {
          id: '9c296931-ba9f-4eef-a864-312060bbcbd6',
          city: "Gent",
          street: "Voskenslaan"
        },
        filling: {
          current: 3,
          max: 4
        }
      },
      {
        date: new Date(2017, 5, 23),
        boardGame: {
          id: '2da38fa8-04c0-42cd-b330-c7f00c062a36',
          name: "Watson and Holmes",
          language: "English",
          weight: 1,
          description: "Watson &amp;amp; Holmes is a game of deduction set within the magnificent works of Arthur Conan Doyle. Two to seven aspiring detectives step into the shoes of Doctor Watson, working alongside the detective Sherlock Holmes to try to solve a series of so far unpublished cases directly extracted from Doctor John H. Watson's diaries. Those who accept the challenge relive the adventures of the crime-solving duo, visiting each of the locations where the inquiries were made. Following the trail, each clue brings players closer to solving the case.&lt;br/&gt;&lt;br/&gt;The objective of the game is to immerse yourself in the Victorian world depicted in each story. Visit the right places, decipher the clues, and above all find the path that leads you to solve the mystery before anybody else. Victory goes to the player who accurately uses the deductive reasoning so famously and ingeniously implemented by the hero of 221B Baker Street.&lt;br/&gt;&lt;br/&gt;The game consists of a series of separate cases, each of which raises a number of questions that each player tries to solve before anyone else. To do this, once the case and the questions have been read aloud, players proceed to visit the locations where the clues are located. Each location cannot be accessed by more than one player at any one time, so if two or more players want to go to the same place, the player who travels there the fastest (i.e., he who uses the largest number of Carriage Tokens) gets the clue, forcing the others to go to a different location. Once every player has a destination, they proceed to read in secret the clue that was discovered at that location. They can discreetly take any notes they deem appropriate. Once this is done, the cards are returned to their place so that others can read them in later turns.&lt;br/&gt;&lt;br/&gt;This procedure is repeated during each turn until one player believes he has found the solutions to the case; at that time, he must go to 221B Baker Street to check if his answers are correct. If all the answers are correct, the player wins; if they are wrong, he will have lost and retires from the game, and the game continues.&lt;br/&gt;&lt;br/&gt;Each detective will also have the invaluable assistance of a number of Sherlock Holmes' allies, above all, the good Dr Watson and of course of the detective himself.&lt;br/&gt;&lt;br/&gt;&amp;bull;&amp;bull;&amp;bull;&lt;br/&gt;&lt;br/&gt;Watson &amp;amp; Holmes es un juego de deducci&amp;oacute;n basado en la admirable obra de Sir Arthur Conan Doyle. &lt;br/&gt;Cada uno de los dos a siete jugadores adoptar&amp;aacute; el papel del Dr. John Watson y acompa&amp;ntilde;ar&amp;aacute; a Sherlock Holmes en la investigaci&amp;oacute;n de una serie de casos in&amp;eacute;ditos hasta ahora, intentando resolver cada uno de ellos antes de que el gran detective le brinde la soluci&amp;oacute;n correcta. Para ello, cada jugador deber&amp;aacute; sumergirse en la Inglaterra victoriana e ir recopilando, en distintas localizaciones, las pistas extra&amp;iacute;das de los diarios del propio Dr. Watson, con el fin de encajarlas correctamente por medio de la l&amp;oacute;gica deductiva.&lt;br/&gt;&lt;br/&gt;Y, todo esto, sin demorarse por el camino, pues solo aqu&amp;eacute;l que resuelva el misterio antes que sus contrincantes se ganar&amp;aacute; la confianza del genio de Baker Street.&lt;br/&gt;&lt;br/&gt;El juego se compone de una serie de casos independientes, cada uno de los cu&amp;aacute;les plantea una serie de interrogantes que cada jugador tratar&amp;aacute; de resolver antes que los dem&amp;aacute;s.&lt;br/&gt;Para ello, una vez se lean el caso y las preguntas en voz alta, los jugadores proceder&amp;aacute;n a visitar las localizaciones donde las pistas se encuentran. Cada localizaci&amp;oacute;n no puede ser visitada por m&amp;aacute;s de un jugador, de manera que, en caso de que dos o m&amp;aacute;s quieran dirigirse a la misma, el jugador que m&amp;aacute;s corra (utilizando un mayor n&amp;uacute;mero de fichas de Carruaje) obtendr&amp;aacute; la pista correspondiente, debiendo los dem&amp;aacute;s dirigirse a otras localizaciones.&lt;br/&gt;Una vez cada jugador obtenga un destino, todos proceder&amp;aacute;n a leer en secreto la pista aparejada a la localizaci&amp;oacute;n correspondiente, pudiendo tomar discretamente las anotaciones que estimen pertinentes. Hecho esto, se devolver&amp;aacute;n las cartas de pista a su lugar para que los dem&amp;aacute;s puedan leerla en rondas posteriores.&lt;br/&gt;Este procedimiento se repetir&amp;aacute; cada ronda, hasta que un jugador crea haber hallado la soluci&amp;oacute;n al caso: en ese momento, habr&amp;aacute; de dirigirse al 221B para comprobar si sus respuestas son acertadas.&lt;br/&gt;En caso de ser todas correctas, habr&amp;aacute; ganado. En caso de error, habr&amp;aacute; perdido y se retirar&amp;aacute; de la partida.&lt;br/&gt;Cada detective contar&amp;aacute;, adem&amp;aacute;s, con la inestimable ayuda de una serie de aliados de Sherlock Holmes, as&amp;iacute; como con la del propio detective y, sobre todo, la del buen Dr. Watson.&lt;br/&gt;&lt;br/&gt;",
          image: "https:////cf.geekdo-images.com/images/pic3477808.jpg",
          boardGameGeekLink: "https://boardgamegeek.com/boardgame/182694"
        },
        organisator: {
          id: 'f36fcaf7-29cf-441a-89bd-e8f1f0ccb73a',
          fullName: "Faker Name",
          intro: "Kitties! Kitties! Kitties! 3",
          age: 31
        },
        location: {
          id: 'c602f17b-a548-4c26-9e20-ed0e8730da2e',
          city: "De Pinte",
          street: "Pintestraat"
        },
        filling: {
          current: 4,
          max: 4
        }
      }
    ];
  }
});
