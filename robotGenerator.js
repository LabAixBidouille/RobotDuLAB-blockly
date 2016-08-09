/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating JavaScript for list blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.JavaScript.lists');

goog.require('Blockly.JavaScript');


Blockly.JavaScript [ 'avance' ] = function (block)  {


  var argument0 = Blockly.JavaScript.valueToCode(block, 'Temps',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'Couleur',
      Blockly.JavaScript.ORDER_NONE) || 'VERT';
  var option = Blockly.JavaScript.valueToCode(block, 'Option',
      Blockly.JavaScript.ORDER_NONE) || '1';
  var code  ="Avant("+argument0+","+argument1+"," + option +"); \n";
  return  code;
};
/*
Blockly.JavaScript['entrer_couleur_main'] = function(block) {
  var value_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_NONE);
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_NONE);
  var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_NONE);
  var code = "value_r + , + value_v , + value_b ";
  return code;
};*/
Blockly.JavaScript [ 'Stop' ] = function (block)  {


  var argument0 = Blockly.JavaScript.valueToCode(block, 'Temps',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'Couleur',
      Blockly.JavaScript.ORDER_NONE) || 'VERT';
  var option = Blockly.JavaScript.valueToCode(block, 'Option',
      Blockly.JavaScript.ORDER_NONE) || '1';
  var code  ="Stop("+argument0+","+argument1+"," + option +"); \n";
  return  code;
};
/****** On recupere la variable temps du block avance ** ***/
Blockly.JavaScript['if_inf'] = function(block) {
  var value_distance = Blockly.JavaScript.valueToCode(block, 'Distance', Blockly.JavaScript.ORDER_ATOMIC) || '20';
  var statements_faire = Blockly.JavaScript.statementToCode(block, 'Faire');

  var code = 'if (cm < ' + value_distance +  '){\n' +
              statements_faire + '} \n';

  return code;
};

Blockly.JavaScript['if_sup'] = function(block) {
  var value_distance = Blockly.JavaScript.valueToCode(block, 'Distance', Blockly.JavaScript.ORDER_ATOMIC) || '20';
  var statements_faire = Blockly.JavaScript.statementToCode(block, 'Faire');

  var code = 'if (cm > ' + value_distance +  '){\n' +
              statements_faire + '} \n';

  return code;
};

Blockly.JavaScript['option'] = function(block) {
  var dropdown_option = block.getFieldValue('option');
  var value_option = Blockly.JavaScript.valueToCode(block, 'Option', Blockly.JavaScript.ORDER_ATOMIC);
  var code = dropdown_option + value_option;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript [ 'recule' ] = function (block)  {

  var argument0 = Blockly.JavaScript.valueToCode(block, 'Temps',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'Couleur',
      Blockly.JavaScript.ORDER_NONE) || 'VERT';
  var option = Blockly.JavaScript.valueToCode(block, 'Option',
      Blockly.JavaScript.ORDER_NONE) || '1';

  var code  ="Arriere("+argument0+","+argument1+"," + option +"); \n";
  return  code;
};

Blockly.JavaScript [ 'RotationGauche' ] = function (block)  {

  var argument0 = Blockly.JavaScript.valueToCode(block, 'Temps',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'Couleur',
      Blockly.JavaScript.ORDER_NONE) || 'VERT';
  var option = Blockly.JavaScript.valueToCode(block, 'Option',
      Blockly.JavaScript.ORDER_NONE) || '1';
  var code  ="Gauche("+argument0+","+argument1+"," + option +"); \n";
  return  code;
};
Blockly.JavaScript [ 'RotationDroite' ] = function (block)  {

  var argument0 = Blockly.JavaScript.valueToCode(block, 'Temps',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'Couleur',
      Blockly.JavaScript.ORDER_NONE) || 'VERT';
  var option = Blockly.JavaScript.valueToCode(block, 'Option',
      Blockly.JavaScript.ORDER_NONE) || '1';

  var code  ="Droite("+argument0+","+argument1+"," + option +"); \n";
  return  code;
};

Blockly.JavaScript [ 'VERT' ] = function (block)  {

  var code  ="VERT";
  return  [ code,  Blockly.JavaScript.ORDER_MEMBER ];
};

Blockly.JavaScript['ROUGE'] = function (block)  {
  var code  ="ROUGE";
  return  [ code,  Blockly.JavaScript.ORDER_MEMBER ];
};

Blockly.JavaScript['MAGENTA'] = function (block)  {
  var code  ="MAGENTA";
  return  [ code,  Blockly.JavaScript.ORDER_MEMBER ];
};

Blockly.JavaScript['BLEU'] = function (block)  {
  var code  ="BLEU";
  return  [ code,  Blockly.JavaScript.ORDER_MEMBER ];
};

Blockly.JavaScript['TURQUOISE'] = function (block)  {

  var code  ="TURQUOISE";
  return  [ code,  Blockly.JavaScript.ORDER_MEMBER ];
};

Blockly.JavaScript['VIOLET'] = function (block)  {
  var code  ="VIOLET";
  return  [ code,  Blockly.JavaScript.ORDER_MEMBER ];
};

Blockly.JavaScript['JAUNE'] = function (block) {
  var code  ="JAUNE";
  return  [ code,  Blockly.JavaScript.ORDER_MEMBER ];
};

Blockly.JavaScript['loop_dist_inf'] = function(block) {
  var value_while = Blockly.JavaScript.valueToCode(block, 'while', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');

  var code = 'while (cm < ' + value_while +') {\n'+ statements_do +'}\n';
  return code;
};

Blockly.JavaScript['loop_dist_sup'] = function(block) {
  var value_while = Blockly.JavaScript.valueToCode(block, 'while', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');

  var code = 'while (cm > ' + value_while +') {\n'+ statements_do +'}\n';
  return code;
};
