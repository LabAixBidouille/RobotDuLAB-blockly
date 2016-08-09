/* on créer le bloque qui permet de faire avancer le robot
   il faut lui donner une durée ! pour que le block soit ajouter
   il faut ajouter dans ce fichier javacript dans le fichier
   html et   <script src ="blocks/avance.js"> </script>
   dans la partie xml  */
Blockly.Blocks['avance'] = {
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    })
    this.appendValueInput("Temps")
        .setCheck("Number")
        .appendField("Le robot avance (en secondes) : ");
    this.appendValueInput("Couleur")
        .setCheck("TEXT")
        .appendField("Couleur du robot : ");
    this.appendValueInput("Option")
        .setCheck(null)
        .appendField("Option : ");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
   }
};
/*
Blockly.Blocks['entrer_couleur_main'] = {
  init: function() {
    this.appendValueInput("r")
        .setCheck(null)
        .appendField("rouge");
    this.appendValueInput("v")
        .setCheck(null)
        .appendField("vert");
    this.appendValueInput("b")
        .setCheck(null)
        .appendField("bleu");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(50);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};*/
Blockly.Blocks['Stop'] = {
  init: function() {
    this.jsonInit({
      "previousStatement": null,
    })
    this.appendValueInput("Temps")
        .setCheck("Number")
        .appendField("Le robot s'arrete (en secondes) : ");
    this.appendValueInput("Couleur")
        .setCheck("TEXT")
        .appendField("Couleur du robot : ");
    this.appendValueInput("Option")
        .setCheck(null)
        .appendField("Option : ");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
   }
};

Blockly.Blocks['if_inf'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendValueInput("Distance")
        .setCheck(null)
        .appendField("if distance (en cm) <");
    this.appendStatementInput("Faire")
        .setCheck(null)
        .appendField("then");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['if_sup'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendValueInput("Distance")
        .setCheck(null)
        .appendField("if distance (en cm) >");
    this.appendStatementInput("Faire")
        .setCheck(null)
        .appendField("then");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['option'] = {
  init: function() {
    this.appendValueInput("Option")
        .setCheck("")
        .appendField(new Blockly.FieldDropdown([["option1", "1"], ["option2", "2"], ["option3", "3"], ["option4", "4"]]), "option");
    this.setOutput(true, null);
    this.setTooltip('');
    this.setColour(0);
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['VERT'] = {
  init: function() {
    this.setOutput(true, null);
    this.setColour(95);
    this.setTooltip('');
  }
};

Blockly.Blocks['ROUGE'] = {
  init: function() {
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
  }
};

Blockly.Blocks['MAGENTA'] = {
  init: function() {
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
  }
};

Blockly.Blocks['BLEU'] = {
  init: function() {
    this.setOutput(true, null);
    this.setColour(240);
    this.setTooltip('');
  }
};

Blockly.Blocks['TURQUOISE'] = {
  init: function() {
    this.setOutput(true, null);
    this.setColour(180);
    this.setTooltip('');
  }
};

Blockly.Blocks['VIOLET'] = {
  init: function() {
    this.setOutput(true, null);
    this.setColour(310);
    this.setTooltip('');
  }
};

Blockly.Blocks['JAUNE'] = {
  init: function() {
    this.setOutput(true, null);
    this.setColour(50);
    this.setTooltip('');
  }
};
Blockly.Blocks['recule'] = {
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    })
    this.appendValueInput("Temps")
        .setCheck("Number")
        .appendField("Le robot recule (en secondes) : ");
    this.appendValueInput("Couleur")
        .setCheck("TEXT")
        .appendField("Couleur du robot : ");
    this.appendValueInput("Option")
        .setCheck(null)
        .appendField("Option : ");
    this.setColour(210);
    this.setTooltip('');

    this.setHelpUrl('http://www.example.com/');
}};

Blockly.Blocks['RotationGauche'] = {
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    })
    this.appendValueInput("Temps")
        .setCheck("Number")
        .appendField("Le robot tourne à gauche (en secondes) : ");
    this.appendValueInput("Couleur")
        .setCheck("TEXT")
        .appendField("Couleur du robot : ");
    this.appendValueInput("Option")
        .setCheck(null)
        .appendField("Option : ");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
   }
};

Blockly.Blocks['RotationDroite'] = {
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    })
    this.appendValueInput("Temps")
        .setCheck("Number")
        .appendField("Le robot tourne à droite (en secondes) : ");
    this.appendValueInput("Couleur")
        .setCheck("TEXT")
        .appendField("Couleur du robot : ");
    this.setColour(210);
    this.setTooltip('');
    this.appendValueInput("Option")
        .setCheck(null)
        .appendField("Option : ");
    this.setHelpUrl('http://www.example.com/');
   }
};

Blockly.Blocks['loop_dist_inf'] = {
  init: function() {
    this.appendValueInput("while")
        .setCheck(null)
        .appendField("while distance <");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['loop_dist_sup'] = {
  init: function() {
    this.appendValueInput("while")
        .setCheck(null)
        .appendField("while distance >");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
