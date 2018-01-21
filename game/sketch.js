
//========== variables ===========

// function setup() { 
//   createCanvas(600, 600);
// } 

// function draw() { 
//   background( 20);
//   ellipse(mouseX, 300, 50, 50);
//   ellipse(300, mouseY, 50, 50);
// }

//=========================

// function setup() { 
//   createCanvas(600, 600);
// } 

// function draw() { 
//   background(255, 245, 214);
  
//   var r = map(mouseY, 0, width, 73, 255);
//   var g = map(mouseY, 0, width, 255, 73);
//   var b = map(mouseY, 0, width, 206, 137);
//   var size = map(mouseY, 0, height, 100, 700);
//   strokeWeight(0);
//   fill(r, g, b);
//   ellipse(300, 300, size, size);
  
//   var s_1 = map(mouseY, 0, width, 1, 7);
//   strokeWeight(s_1);
//   stroke(0);
//   line(100, 0, 100, mouseY);

//   var r_2 = map(mouseY, 0, height, 255, 255);
//   var g_2 = map(mouseY, 0, width, 255, 175);
//   var b_2 = map(mouseY, 0, height, 255, 5);
//   strokeWeight(6);
//   stroke(r_2, g_2, b_2);
//   line(300, 600, 300, mouseY);
  
//   var s = map(mouseY, 0, height, 300, 550);
//   line(500, 0, s, mouseY);
// }

//========= Final Project ===========
var box = [];
var sound = [];
var title = true;
var chat1 = false;
var chat2 = false;
var chat3 = false;
var chat4 = false;
var chat5 = false;
var chat3_happened = false;
var chat4_happened = false;
var scene1 = false;
var scene2 = false;
var i = 0;                     //number of bubbles
var up = 0;
var mv = false;                //whether the bubbles need to move up or not
var l_off = false;             //whether light is off or not
var desk, room, bat, clock, light_off, flash, avatar, email, living_room, earrings;
var move_r, move_l;
var phone_open = true;
var flash_open = false;
var chat_stop = false;

var kate_meet = false;
var dead_end = false;
var win_end = false;
var window_1 = true;            //whether notification window 1 opens or not
var choice_1 = false;           //two options: "use bat" & "run"
var choice_2 = false;           //one option: "run"


//------- Sound -------
var send, recieve, click, laugh;
var laugh_played = false;
// var send_played = false;
// var recieve_played = false;

//------- Buttons -------
var move_right = false;
var move_left = false;

//------- Choices -------
var Usebat = false;
var Run = false;

//------- Objects-------
var computer_click = false;
var bat_click = false;
var clock_click = false;
var comp_password = '';
var password_1;
var earrings_click = false;
var dogToy_click = false;

//------- Things taken -------
var bat_taken = false;
var clock_taken = false;
var er_taken = false;
var dogToy_taken = false;



//***************************************** Helper Functions *********************************************

function preload() {
  desk = loadImage("Final_data/desk_2.png");
  room = loadImage("Final_data/room.png");
  bat = loadImage("Final_data/bat.png");
  clock = loadImage("Final_data/clock.png");
  light_off = loadImage("Final_data/light_off.png");
  flash = loadImage("Final_data/flash.png");
  avatar = loadImage("Final_data/avatar.png");
  email = loadImage("Final_data/email.png");
  move_r = loadImage("Final_data/move_right.png");
  move_l = loadImage("Final_data/move_left.png");
  living_room = loadImage("Final_data/living_room.png");
  earrings = loadImage("Final_data/earrings.png");

  send = loadSound('Final_data/send.mp3');
  recieve = loadSound('Final_data/recieve.mp3');
  click = loadSound('Final_data/click.mp3');
  laugh = loadSound('Final_data/laugh.mp3');
}

function setup() {
  createCanvas(1280, 720);
  imageMode(CENTER);
  // send.loop();
}

//return the legnth of the given string
function a_len(array) {
  var count = 0;
  for (var k in array) {
    if (array.hasOwnProperty(k)) {
      count++;
    }
  }
  return count;
}

//return the pop ups (notification)
function pop_up(msg, but1, but2, num) {
  fill(255, 215, 86);
  rect(393, 219, 565, 289, 5);
  fill(53, 46, 24).strokeWeight(0).textSize(40).textFont("Sue Ellen Francisco");
  text(msg, 450, 306);
  if(num == 2) {
    fill(255);
    rect(447, 425, 174, 57, 5);
    rect(717, 425, 174, 57, 5);
  }
  else if(num == 1) {
    //fill(255, 215, 86);
    //rect(447, 425, 174, 57, 5);
    fill(255);
    rect(595, 425, 174, 57, 5);
  }
  else {
    fill(255, 215, 86);
    rect(447, 425, 174, 57, 5);
    rect(717, 425, 174, 57, 5);
  }
  
  fill(53, 46, 24).strokeWeight(0).textSize(40).textFont("Sue Ellen Francisco");
  if(num == 2) {
    text(but1, 482, 471);
    text(but2, 781, 471);
  }
  else if(num == 1) {
    text(but1, 645, 471);
  } 
}


function mouseReleased() {
  //move right button
  if (move_right && mouseX > 1217 && mouseX < 1261 && mouseY > 265 && mouseY < 325) {
    if (scene1) {
      scene1 = false;
      scene2 = true;
      move_right = false;
      move_left = true;
    }
  }

  //move left button
  if (move_left && mouseX > 1217 && mouseX < 1261 && mouseY > 354 && mouseY < 410) {
    if (scene2) {
      scene2 = false;
      scene1 = true;
      move_left = false;
      move_right = true;
    }
  }

  //chat 1
  if (chat1) {
    if (i < 28) {   //a_len(box)-1
     i++;
    } 

    if (i == 23)
      l_off = true;  

    if (mv)
      up = up - 60;        
  }

  //title
  if (!title) {
    chat2 = true;
    scene1 = true;
  }

  //chat 2
  if (chat2) {
    if (mouseX > 50 && mouseX < 450 && mouseY > 10 && mouseY < 690 && phone_open == true) {
      if (i < 42) {   //a_len(box)-1
        i++;

        if (i == 42) {
          flash_open = true;
          move_right = true;
        }

        if (mv)
          up = up - 60; 
      }
    }

    //phone open/close
    if (mouseX > 450 && mouseX < 500 && mouseY > 300 && mouseY < 360) {
      phone_open = false;
    } else if (phone_open == false && mouseX > 0 && mouseX < 50 && mouseY > 300 && mouseY < 360) {
      phone_open = true;
    }

  }

  //chat 3
  if (chat3) {
    if (mouseX > 50 && mouseX < 450 && mouseY > 10 && mouseY < 690 && phone_open == true) {
      if (i < 59) {   //a_len(box)-1
        i++;

        if (mv)
          up = up - 60; 
      }
    }

    //phone open/close
    if (mouseX > 450 && mouseX < 500 && mouseY > 300 && mouseY < 360) {
      phone_open = false;
    } else if (phone_open == false && mouseX > 0 && mouseX < 50 && mouseY > 300 && mouseY < 360) {
      phone_open = true;
    }
  }

  //chat 4
  if (chat4) {
    if (mouseX > 50 && mouseX < 450 && mouseY > 10 && mouseY < 690 && phone_open == true) {
      if (chat3_happened) {
        if (i < 79) {
          i++;

          if (mv)
            up = up - 60; 
        } 
      } else {
        if (i < 62) {
          i++;

          if (mv)
            up = up - 60; 
        }         
      }
    }

    //phone open/close
    if (mouseX > 450 && mouseX < 500 && mouseY > 300 && mouseY < 360) {
      phone_open = false;
    } else if (phone_open == false && mouseX > 0 && mouseX < 50 && mouseY > 300 && mouseY < 360) {
      phone_open = true;
    }
  }

  //chat 5
  if (chat5) {
    if (mouseX > 50 && mouseX < 450 && mouseY > 10 && mouseY < 690 && phone_open == true) {
      if (i < a_len(box)-1) {   //a_len(box)-1
        i++;

        if (mv)
          up = up - 60; 
      }
    }

    //phone open/close
    if (mouseX > 450 && mouseX < 500 && mouseY > 300 && mouseY < 360) {
      phone_open = false;
    } else if (phone_open == false && mouseX > 0 && mouseX < 50 && mouseY > 300 && mouseY < 360) {
      phone_open = true;
    }
  }

  if (scene1 && !scene2) {
    //computer
    if (flash_open == true && phone_open == false && mouseX > 282 && mouseX < 459 && mouseY > 243 && mouseY < 363) {
      if (!computer_click)
        computer_click = true;
    } else if (computer_click == true && !(mouseX > 599 && mouseX < 1200 && mouseY > 159 && mouseY < 559)) {
      computer_click = false;
      comp_password = '';
    }

    //bat
    if (flash_open == true && mouseX > 577 && mouseX < 694 && mouseY > 324 && mouseY < 601) {
      if (!bat_click) {
        bat_click = true;
        click.play();
      }
    }

    //clock
    if (flash_open == true && mouseX > 1027 && mouseX < 1070 && mouseY > 196 && mouseY < 244) {
      if (!clock_click) {
        clock_click = true;
        click.play();
      }

    }
  }

  if (scene2) {
    //earrings
    if (!earrings_click && mouseX > 993 && mouseX < 1018 && mouseY > 587 && mouseY < 606) {
      earrings_click = true;
      click.play();
    }

    //dog toy
    if (!dogToy_click && mouseX > 223 && mouseX < 309 && mouseY > 224 && mouseY < 261) {
      dogToy_click = true;
      click.play();
    }

    //check whether the email has been seen or not
    if (chat4_happened) {
      if (chat3_happened){
        if (i == 79)
          kate_meet = true;
      } else if (i == 62) {
        kate_meet = true;
      }      
    }

    //dismiss the window after choose "run"
    if (kate_meet && Usebat && !(mouseX > 400 && mouseX < 927 && mouseY > 214 && mouseY < 485) && choice_1 && window_1) {
      window_1 = false;
      // Usebat = false;
      // kate_meet = false;
      //choice_1 = false;
      //laugh_played = true;    //should be commented for future plot development
    }

    if (kate_meet && mouseX > 715 && mouseX < 892 && mouseY > 402 && mouseY < 461 && !Run && choice_1 && !Usebat) {   //choose "run" in two options
      Run = true;
      dead_end = true;
      // laugh.play();
      laugh_played = true;
    } else if (kate_meet && mouseX > 579 && mouseX < 758 && mouseY > 401 && mouseY < 460 && !Run && choice_2 && !Usebat) {  //choose "run" in one option
      Run = true;
      dead_end = true;
      // laugh.play();
      laugh_played = true;
    } else if (kate_meet && mouseX > 447 && mouseX < 624 && mouseY > 401 && mouseY < 460 && !Usebat && choice_1) {  //choose "use bat" in two options
      Usebat = true;
    }


  }
}

//input
function keyTyped() {
  if (computer_click && comp_password.length < 17) {
    comp_password += key;
  }
}

function keyReleased() {
  if (computer_click) {
    if (keyCode == 8)
      comp_password = comp_password.substring(0, comp_password.length-1);
    }

    if (keyCode == 13) {
      password_1 = comp_password;
    }
}



//***************************************** Elements *********************************************

//------- Bubble -------
function bubble(grey, info, box_count, breaker) {
  var sound_played = false;
  this.len = (info.length + 1)*11;
  this.m = grey;                                  //color of the bubble
  this.i = info;                                  //text in the bubble
  this.count = box_count;                         //# of the bubble
  this.b = breaker;                               //# of \n before

  this.display = function() {
    var c, x, y;
    var height = 40;
    var width = this.len;
    var i_2 = this.i;
    var j = Math.ceil(this.i.length/30);
    
    //bubble
    if (this.len >= 300) {
      height = 28*(j-1) + height;
      width = 300;

      for (var k = 0; k <= j; k++) {
        i_2 = i_2.slice(0, 30*(k+1)+k) + '\n' + i_2.slice(30*(k+1)+k);
      }     
    }

    if (this.m == 1) {
      c = color(193, 192, 186);  //grey
      x = 450;
      y = 50+this.count*50+28*this.b;
      if (sound[box_count] == undefined)
        sound[box_count] = 11;
      // recieve.play();
    } else {
      c = color(82, 171, 216);  //blue
      x = 830 - width;
      y = 50+this.count*50+28*this.b;
      if (sound[box_count] == undefined)
        sound[box_count] = 21;
      // send.play();
    }
    fill(c);

    rect(x, y, width, height, 10);

    if (y > 300) {
      mv = true;
    }

    //text
    if (this.m == 1) {
      fill(0);
    } else {
      fill(255);
    }
    strokeWeight(0).textSize(20).textFont("Helvetica Neue");    //may need source on other PCs. //76, 66, 35
    text(i_2, x+7, y+27); 
  }
}

function display_bubble(num) {
  for (var h = 0; h <= num; h++)
    box[h].display();
}

function sound_play(num) {
  for (var h = 0; h <= num; h++) {
    if (sound[h] == 11) {
      recieve.play();
      sound[h] = 10;
    } else if (sound[h] == 21) {
      send.play();
      sound[h] = 20;
    }
    
  }
}

//------- Phone -------
function draw_phone(number) {
  strokeWeight(0);

  fill(163, 35, 49); //72, 79, 91
  rect(390, -10, 500, 800, 10);

  fill(244, 243, 237);
  rect(440, 10, 400, 700, 10);

  push();
  if (mv)
    translate(0, up);

  if (number == 1) {
    chat1 = true;
    chat_1();
  } else if (number == 2) {
    chat_2();
  } else if (number == 3) {
    chat_3();
  } else if (number == 4) {
    chat_4();
  } else if (number == 5) {
    chat_5();
  }
  pop();

  fill(163, 35, 49);
  rect(390, -10, 500, 20, 10);

  fill(255, 255, 255, 50);
  triangle(490, -40, 890, -40, 890, 860);
}

//------- Flash -------
function use_flash() {
    if (flash_open) {
    image(flash, mouseX-60, mouseY+30, 3612, 2257);
  } else {
    image(light_off, 665, 360, 1232, 720);
  }
}

//------- Messages -------
function messages() {
  if (bat_taken) {
    fill(255).strokeWeight(2).stroke(0).textSize(70).textFont("Sue Ellen Francisco");
    text("bat", 723, 680);
  }

  if (clock_taken) {
    fill(255).strokeWeight(2).stroke(0).textSize(70).textFont("Sue Ellen Francisco");
    text("clock", 849, 680);
  }

  if (dogToy_taken) {
    fill(255).strokeWeight(2).stroke(0).textSize(70).textFont("Sue Ellen Francisco");
    text("Toy", 999, 680);
  }
}

//***************************************** Scenes *********************************************

function chat_1() {
  box[0] = new bubble(1, "Are you in Kate's house?", 0, 0);
  box[1] = new bubble(0, "Yeah, whassup?", 1, 0);
  box[2] = new bubble(1, 'Get out of there RIGHT NOW', 2, 0);
  box[3] = new bubble(0, 'Why? I just got here', 3, 0);
  box[4] = new bubble(1, "I'm serious", 4, 0);
  box[5] = new bubble(1, "Get out of the house NOW", 5, 0);
  box[6] = new bubble(1, "Something's wrong with Kate", 6, 0);
  box[7] = new bubble(0, "What? ", 7, 0);
  box[8] = new bubble(1, "This is no joke, Sarah", 8, 0);
  box[9] = new bubble(1, "Wait, is she here?", 9, 0);
  box[10] = new bubble(0, "Kate? No", 10, 0);
  box[11] = new bubble(0, "She is downstairs getting us  some juice", 11, 0);
  box[12] = new bubble(0, "Won't be back in a while", 12, 1);
  box[13] = new bubble(1, "Good, please stay away from   her", 13, 1);
  box[14] = new bubble(1, "Leave now", 14, 2);
  box[15] = new bubble(0, "What's the matter with Kate?", 15, 2);
  box[16] = new bubble(1, "We don't have time for this,  just listen!", 16, 2);
  box[17] = new bubble(0, "Whoa, you're scaring me, John", 17, 3);
  box[18] = new bubble(0, "I'm not going anywhere until  you tell me why", 18, 3);
  box[19] = new bubble(0, "Or I might just talk to Kate  about this", 19, 4);
  box[20] = new bubble(1, "Don't tell her!!!", 20, 5);
  box[21] = new bubble(0, "Then tell me what is going on here!", 21, 5);
  box[22] = new bubble(1, "Fine, listen...", 22, 6);
  box[23] = new bubble(0, ".jhk", 23, 6);
  box[24] = new bubble(1, "?", 24, 6);
  box[25] = new bubble(1, "Sarah?", 25, 6);
  box[26] = new bubble(1, "Hey are u all right?!!", 26, 6);
  box[27] = new bubble(1, "Sarah!!!", 27, 6);

  //  box[9] = new bubble(1, "Leave now!", 9, 0);
  // box[10] = new bubble(0, "What's the matter with Kate?", 10, 0);
  // box[11] = new bubble(1, "We don't have time for this,  just listen!", 11, 0);
  // box[12] = new bubble(0, "Whoa, you're scaring me, John", 12, 1);
  // box[13] = new bubble(0, "I'm not going anywhere until  you tell me why", 13, 1);
  // box[14] = new bubble(0, "Or I might just talk to Kate  about this", 14, 2);
  // box[15] = new bubble(1, "Don't tell her!!!", 15, 3);
  // box[16] = new bubble(0, "Then tell me what is going on here!", 16, 3);
  // box[17] = new bubble(1, "Fine", 17, 4);
  // box[18] = new bubble(1, "Is she here?", 18, 4);
  // box[19] = new bubble(0, "Kate? No", 19, 4);
  // box[20] = new bubble(0, "She is downstairs getting us  some juice", 20, 4);
  // box[21] = new bubble(0, "Won't be back in a while", 21, 5);
  // box[22] = new bubble(1, "Good", 22, 5);
  
  display_bubble(i);
  sound_play(i);
}

function chat_2() {
  box[28] = new bubble(1, "You there? What's going on?!", 28, 6);
  box[29] = new bubble(0, "I'm OK", 29, 6);
  box[30] = new bubble(0, "The lights went off just now", 30, 6);
  box[31] = new bubble(0, "But I'm alright", 31, 6);
  box[32] = new bubble(1, "Thank god", 32, 6);
  box[33] = new bubble(1, "Now leave the room before Katefinds out", 33, 6);
  box[34] = new bubble(1, "I'll explain later", 34, 7);
  box[35] = new bubble(0, "Promise me this is not a joke,John", 35, 7);
  box[36] = new bubble(0, "Cuz it is not funny at all", 36, 8);
  box[37] = new bubble(1, "It's not, you have my word", 37, 8);
  box[38] = new bubble(0, "Good ", 38, 8);
  box[39] = new bubble(0, "You want me out of the house, right?", 39, 8);
  box[40] = new bubble(1, "Yeah, and remember to keep outof Kate's sight", 40, 9);
  box[41] = new bubble(1, "Or anyone else in the house", 41, 10);
  box[42] = new bubble(0, "K, I got this", 42, 10);

  display_bubble(i);
  sound_play(i);
}

function chat_3() {

    box[43] = new bubble(0, "OMG  ", 43, 10);
    box[44] = new bubble(1, "What happened?", 44, 10);
    box[45] = new bubble(0, "I found an unsent email on    Kate's computer", 45, 10);
    box[46] = new bubble(0, "And it's making me            uncomfortable", 46, 11);
    box[47] = new bubble(1, "What does it say?", 47, 12);
    box[48] = new bubble(0, "Wait a sec...My phone's camerais not working", 48, 12);
    box[49] = new bubble(0, "'J&A are on the way. S will be ready tmr, no worries.'", 49, 13);
    box[50] = new bubble(0, "What is 'ready' supposed to   mean??", 50, 14);
    box[51] = new bubble(0, "And John, I know it sounds    crazy", 51, 15);
    box[52] = new bubble(0, "But do you think 'S' is       referring to...", 52, 16);
    box[53] = new bubble(0, "Me? ", 53, 17);
    box[54] = new bubble(1, "I hate to say so, but I'm     afraid you are right.", 54, 17);
    box[55] = new bubble(0, "Oh god ", 55, 18);
    box[56] = new bubble(1, "I know.", 56, 18);
    box[57] = new bubble(1, "But stay calm", 57, 18);
    box[58] = new bubble(1, "Get out of the house and you  will be fine", 58, 18);
    box[59] = new bubble(0, "I'm going downstairs now.", 59, 19);
  

  //This is absurd.
  
  //Jesus.
  chat3_happened = true;
  display_bubble(i);
  sound_play(i);
}

function chat_4() {
  if (chat3_happened) {
    box[60] = new bubble(0, "Jesus", 60, 19);
    box[61] = new bubble(0, "I found an earring under the  sofa", 61, 19);
    box[62] = new bubble(0, "It looks like Alice's...", 62, 20);
    box[63] = new bubble(0, "She should be traveling with  Jeff by now", 63, 20);
    box[64] = new bubble(0, "Why is her earring here...", 64, 21);
    box[65] = new bubble(1, "You sure it's Alice's?", 65, 21);
    box[66] = new bubble(0, "Positive.", 66, 21);
    box[67] = new bubble(0, "She sent me the picture after she bought them in Thailand", 67, 21);
    box[68] = new bubble(1, "...J&A", 68, 22);
    box[69] = new bubble(0, "What do you mean?", 69, 22);
    box[70] = new bubble(1, "The email. Jeff & Alice. They got kidnapped", 70, 22);
    box[71] = new bubble(0, "No ", 71, 23);
    box[72] = new bubble(1, "Sarah", 72, 23);
    box[73] = new bubble(0, "I'm going to call the police", 73, 23);
    box[74] = new bubble(1, "I already did", 74, 23);
    box[75] = new bubble(1, "Should be there soon", 75, 23);
    box[76] = new bubble(0, "Jesus Christ", 76, 23);
    box[77] = new bubble(1, "Don't panic, Sarah!", 77, 23);
    box[78] = new bubble(0, "No, I hear someone", 78, 23);
    box[79] = new bubble(0, "Stop texting", 79, 23);
  } else {
    box[43] = new bubble(0, "Jesus", 43, 10);
    box[44] = new bubble(0, "I found an earring under the  sofa", 44, 10);
    box[45] = new bubble(0, "It looks like Alice's...", 45, 11);
    box[46] = new bubble(0, "She should be traveling with  Jeff by now", 46, 11);
    box[47] = new bubble(0, "Why is her earring here...", 47, 12);
    box[48] = new bubble(1, "You sure it's Alice's?", 48, 12);
    box[49] = new bubble(0, "Positive.", 49, 12);
    box[50] = new bubble(0, "She sent me the picture after she bought them in Thailand", 50, 12);
    box[51] = new bubble(1, "They are not on a trip", 51, 13);
    box[52] = new bubble(0, "What do you mean?", 52, 13);
    box[53] = new bubble(1, "Jeff and Alice. They got      kidnapped", 53, 14);
    box[54] = new bubble(0, "No ", 54, 15);
    box[55] = new bubble(1, "Sarah", 55, 15);
    box[56] = new bubble(0, "I'm going to call the police", 56, 15);
    box[57] = new bubble(1, "I already did", 57, 15);
    box[58] = new bubble(1, "Should be there soon", 58, 15);
    box[59] = new bubble(0, "Jesus Christ", 59, 15);
    box[60] = new bubble(1, "Don't panic, Sarah!", 60, 15);
    box[61] = new bubble(0, "No, I hear someone", 61, 15);
    box[62] = new bubble(0, "Stop texting", 62, 15);
  }
  chat4_happened = true;
  display_bubble(i);
  sound_play(i);
}

function chat_5() {
  if (chat3_happened) {
    box[80] = new bubble(0, "I took Kate down", 80, 23);
    box[81] = new bubble(1, "Wtf...You ok?", 81, 23);
    box[82] = new bubble(0, "Yeah I guess I'm safe for now", 82, 23);
    box[83] = new bubble(0, "Maybe I should tie her up and ask about Alice & Jeff when   the police come?", 83, 23);
    box[84] = new bubble(1, "No, that's too dangerous", 84, 25);
    box[85] = new bubble(1, "I'm almost there", 85, 25);
    box[86] = new bubble(1, "Meet me at the garden", 86, 25);

  } else {
    box[63] = new bubble(0, "I took Kate down", 63, 15);
    box[64] = new bubble(1, "Wtf...You ok?", 64, 15);
    box[65] = new bubble(0, "Yeah I guess I'm safe for now", 65, 15);
    box[66] = new bubble(0, "Maybe I should tie her up and ask about Alice & Jeff when   the police come?", 66, 15);
    box[67] = new bubble(1, "No, that's too dangerous", 67, 17);
    box[68] = new bubble(1, "I'm almost there", 68, 17);
    box[69] = new bubble(1, "Meet me at the garden", 69, 17);
  }
  display_bubble(i);
  sound_play(i);
}

function scene_1() {
  var bat_x = 633;
  var bat_y = 463;
  var clock_x = 1050;
  var clock_y = 223;

  background(239, 221, 184);
  strokeWeight(0);
  fill(249, 242, 227);
  rect(0, 0, 1280, 600);

  if (bat_click) {
    bat_x = -100;
    bat_y = -100;
    bat_taken = true;
  }

  if (clock_click) {
    clock_x = -100;
    clock_y = -100;
    clock_taken = true;
  }

  image(room, 700, 317, 1114, 569);
  image(bat, bat_x, bat_y, 112, 275);
  image(clock, clock_x, clock_y, 34, 41);

  use_flash(); 

  // messages();

  if (computer_click) {
    strokeWeight(0);
    //screen
    fill(186, 100, 123);
    rect(599, 159, 600, 400);

    //typing area
    fill(114, 61, 76);
    rect(760, 455, 275, 49, 10);

    fill(255).strokeWeight(0).textSize(20).textFont("Helvetica Neue");
    text(comp_password, 780, 485);

    //avatar
    image(avatar, 900, 324, 200, 200);

    //window (correct password)
    if (password_1 == 6534) {
      fill(186, 100, 123);
      rect(599, 159, 600, 400);
      image(email, 829, 360, 428, 383);
    }
  }
}

function scene_2() {
  er_x = 1005;
  er_y = 597;

  background(51, 144, 181);
  strokeWeight(0);
  fill(102, 172, 199);
  rect(0, 0, 1280, 600);

  if (earrings_click) {
    er_x = -100;
    er_y = -100;
    er_taken = true;
  }

  if (dogToy_click)
    dogToy_taken = true;

  image(living_room, 700, 336, 1146, 531);
  image(earrings, er_x, er_y, 15, 6);

  use_flash(); 
}

//***************************************** Draw *********************************************

function draw() {
  if (mouseIsPressed) {
    if (i == 22) {
      fill(0);
      rect(0, 0, 1280, 720);
    }
  }

//------- Start Scene -------

  if (i < 28) {
    if (l_off) {    
      background(0);
    } else {
      background(112, 86, 57);
      image(desk, 600, 240, 1600, 1200);
    }
    draw_phone(1);
  } else {
    chat1 = false;
  }

  if (chat1 == false && chat2 == false) {
    mv = false;
  }

//------- Title -------

if (i == 28 && title == true) {
  background(0);
  fill(255).strokeWeight(0).textSize(80).textFont("Sue Ellen Francisco");
  text("- FRIENDS -", 480, 360);
  textSize(30)
  text("Click To Continue", 560, 440);
  title = false; 
}

//------- The Room -------

if (i >= 28 && chat2 == true && scene1 == true) {   //remeber to add the upper bound!!!
  scene_1();

  push();
  if (!phone_open) {
    translate(-450, 0);
  }
  translate(-390, 0);
  draw_phone(2);
  if (!computer_click && password_1 == 6534 && !chat3 && !chat4_happened) {
    chat3 = true;
    phone_open = true;
    draw_phone(3);
  }
  stroke(218, 226, 239);
  strokeWeight(10);
  line(867, 310, 867, 360);
  pop();

} else {
  chat2 = false;
  chat3 = false;
}

//------- The Living Room -------

if (scene2 == true) {
  scene_2();

  push();
  if (!phone_open) {
    translate(-450, 0);
  }
  translate(-390, 0);

  if (chat3_happened) {
    draw_phone(3);
  } else {
    draw_phone(2);
  }
  
  if (er_taken && !chat4) {
    chat4 = true;
    phone_open = true;
    draw_phone(4);
  } else if (kate_meet && !window_1 && Usebat && !chat5) {
    chat5 = true;
    phone_open = true;
    draw_phone(5);
  }
  stroke(218, 226, 239);
  strokeWeight(10);
  line(867, 310, 867, 360);
  pop();

  if (kate_meet && !phone_open && window_1) {
    fill(255, 215, 86);
    rect(403, 217, 522, 267, 5);

    fill(53, 46, 24).strokeWeight(0).textSize(40).textFont("Sue Ellen Francisco");
    text("Kate is here. \nLooks unhappy to see you downstairs.", 469, 294);

    if (bat_taken) {
      fill(255);
      rect(448, 402, 174, 57, 5);
      rect(717, 402, 174, 57, 5);

      fill(53, 46, 24).strokeWeight(0).textSize(40).textFont("Sue Ellen Francisco");
      text("Use bat", 492, 449);
      text("Run", 791, 449);
      choice_1 = true;
    } else {
      fill(255);
      rect(582, 402, 174, 57, 5);

      fill(53, 46, 24).strokeWeight(0).textSize(40).textFont("Sue Ellen Francisco");
      text("Run", 651, 449);
      choice_2 = true;
    }

    if (Usebat) {
      fill(255, 215, 86);
      rect(403, 217, 522, 267, 5);
      // textAlign(CENTER);

      fill(53, 46, 24).strokeWeight(0).textSize(40).textFont("Sue Ellen Francisco");
      text("Kate is down.\nNice!", 564, 344);
      //window_1 = false;
      //win_end = true;
    }

  }

} else {
  // chat3 = false;
  chat4 = false;
}



//------- Messages & buttons -------
if (dead_end) {
  if (laugh_played) {
    laugh.play();
    laugh_played = false;
  }
  fill(255, 215, 86);
  rect(403, 217, 522, 267, 5);
  // textAlign(CENTER);

  fill(53, 46, 24).strokeWeight(0).textSize(40).textFont("Sue Ellen Francisco");
  text("Game Over.\nYou didn't make it.", 564, 344);
} else if (win_end) {
  if (laugh_played) {
    laugh.play();
    laugh_played = false;
  }
  //phone_open = false;
  fill(255, 215, 86);
  rect(403, 217, 522, 267, 5);
  // textAlign(CENTER);

  fill(53, 46, 24).strokeWeight(0).textSize(40).textFont("Sue Ellen Francisco");
  text("You win.\nYou made it", 564, 344);
}

if (move_right) {
  image(move_r, 1240.5, 294, 35, 52);
}

if (move_left) {
  image(move_l, 1240.5, 380, 35, 52);
}

messages();

}





//91, 52, 8






















