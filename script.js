var g

function GPA60() {
    //variables for courses having 20 marks
    qp21 = 1
    qp22 = 1.5
    qp23 = 2
    qp24 = 2.33
    qp25 = 2.67
    qp26 = 3
    qp27 = 3.33
    qp28 = 3.67
    qp29 = 4
    qp20 = 0
        //
        //variables for courses having 60 marks
    qp61 = 3
    qp62 = 3.5
    qp63 = 4
    qp64 = 4.5
    qp65 = 5
    qp66 = 5.5
    qp67 = 6
    qp68 = 6.33
    qp69 = 6.67
    qp70 = 7
    qp71 = 7.33
    qp72 = 7.67
    qp73 = 8
    qp74 = 8.33
    qp75 = 8.67
    qp76 = 9
    qp77 = 9.33
    qp78 = 9.67
    qp79 = 10
    qp80 = 10.33
    qp81 = 10.67
    qp82 = 11
    qp83 = 11.33
    qp84 = 11.67
    qp85 = 12
        //
        //variables for courses having 40 marks
    qp41 = 2
    qp42 = 2.5
    qp43 = 3
    qp44 = 3.5
    qp45 = 4
    qp46 = 4.33
    qp47 = 4.67
    qp48 = 5
    qp49 = 5.33
    qp50 = 5.67
    qp51 = 6
    qp52 = 6.33
    qp53 = 6.67
    qp54 = 7
    qp55 = 7.33
    qp56 = 7.67
    qp57 = 8
        //variable for courses having 80 marks
    qp86 = 4
    qp87 = 4.5
    qp88 = 5
    qp89 = 5.5
    qp90 = 6
    qp91 = 6.5
    qp92 = 7
    qp93 = 7.5
    qp94 = 8
    qp95 = 8.33
    qp96 = 8.67
    qp97 = 9
    qp98 = 9.33
    qp99 = 9.67
    qp100 = 10
    qp101 = 10.33
    qp102 = 10.67
    qp103 = 11
    qp104 = 11.33
    qp105 = 11.67
    qp106 = 12
    qp107 = 12.33
    qp108 = 12.67
    qp109 = 13
    qp110 = 13.33
    qp111 = 13.67
    qp112 = 14
    qp113 = 14.33
    qp114 = 14.67
    qp115 = 15
    qp116 = 15.33
    qp117 = 15.67
    qp118 = 16
        //variables for courses with 100 marks
    qp120 = 5
    qp121 = 5.5
    qp122 = 6
    qp123 = 6.5
    qp124 = 7
    qp125 = 7.5
    qp126 = 8
    qp127 = 8.5
    qp128 = 9
    qp129 = 9.5
    qp130 = 10
    qp131 = 10.33
    qp132 = 10.67
    qp133 = 11
    qp134 = 11.33
    qp135 = 11.67
    qp136 = 12
    qp137 = 12.33
    qp138 = 12.67
    qp139 = 13
    qp140 = 13.33
    qp141 = 13.67
    qp142 = 14
    qp143 = 14.33
    qp144 = 14.67
    qp145 = 15
    qp146 = 15.33
    qp147 = 15.67
    qp148 = 16
    qp149 = 16.33
    qp150 = 16.67
    qp151 = 17
    qp152 = 17.33
    qp153 = 17.67
    qp154 = 18
    qp155 = 18.33
    qp156 = 18.67
    qp157 = 19
    qp158 = 19.33
    qp159 = 19.67
    qp160 = 20

    //variables for quality points ended



    //grabbing the values entered by the user
    a = document.getElementById("subject1o").value;
    b = document.getElementById("subject2o").value;
    c = document.getElementById("subject3o").value;
    d = document.getElementById("subject4o").value;
    e = document.getElementById("subject5o").value;
    f = document.getElementById("subject6o").value;
    n1 = document.getElementById("subject7o").value;
    o1 = document.getElementById("subject8o").value;
    p1 = document.getElementById("subject9o").value;
    q1 = document.getElementById("subject10o").value;
    g = document.getElementById("crehrs").value;
    h = document.getElementById("subject1t").value;
    i = document.getElementById("subject2t").value;
    j = document.getElementById("subject3t").value;
    k = document.getElementById("subject4t").value;
    l = document.getElementById("subject5t").value;
    m = document.getElementById("subject6t").value;
    r1 = document.getElementById("subject7t").value;
    s1 = document.getElementById("subject8t").value;
    t1 = document.getElementById("subject9t").value;
    u1 = document.getElementById("subject10t").value;
    //grabbing the table 
    cell1gr = document.getElementById("gr1");
    cell1quapo = document.getElementById("quapo1");
    cell1OM = document.getElementById("OM1");
    cell1pr = document.getElementById("pr1");
    cell2gr = document.getElementById("gr2");
    cell2quapo = document.getElementById("quapo2");
    cell2OM = document.getElementById("OM2");
    cell2pr = document.getElementById("pr2");
    cell3gr = document.getElementById("gr3");
    cell3quapo = document.getElementById("quapo3");
    cell3OM = document.getElementById("OM3");
    cell3pr = document.getElementById("pr3");
    cell4gr = document.getElementById("gr4");
    cell4quapo = document.getElementById("quapo4");
    cell4OM = document.getElementById("OM4");
    cell4pr = document.getElementById("pr4");
    cell5gr = document.getElementById("gr5");
    cell5quapo = document.getElementById("quapo5");
    cell5OM = document.getElementById("OM5");
    cell5pr = document.getElementById("pr5");
    cell6gr = document.getElementById("gr6");
    cell6quapo = document.getElementById("quapo6");
    cell6OM = document.getElementById("OM6");
    cell6pr = document.getElementById("pr6");
    cell7gr = document.getElementById("gr7");
    cell7quapo = document.getElementById("quapo7");
    cell7OM = document.getElementById("OM7");
    cell7pr = document.getElementById("pr7");
    cell8gr = document.getElementById("gr8");
    cell8quapo = document.getElementById("quapo8");
    cell8OM = document.getElementById("OM8");
    cell8pr = document.getElementById("pr8");
    cell9gr = document.getElementById("gr9");
    cell9quapo = document.getElementById("quapo9");
    cell9OM = document.getElementById("OM9");
    cell9pr = document.getElementById("pr9");
    cell10gr = document.getElementById("gr10");
    cell10quapo = document.getElementById("quapo10");
    cell10OM = document.getElementById("OM10");
    cell10pr = document.getElementById("pr10");
    celltquapo = document.getElementById("quapot");
    celltOM = document.getElementById("OMt");
    celltpr = document.getElementById("pr");

    //checking for empty values and assigning zero to them

    if (a == "") {
        a = qp20;
    }

    if (b == "") {
        b = qp20;
    }

    if (c == "") {
        c = qp20;
    }

    if (d == "") {
        d = qp20;
    }

    if (e == "") {
        e = qp20;
    }

    if (f == "") {
        f = qp20;
    }

    if (h == "") {
        h = qp20;
    }

    if (i == "") {
        i = qp20;
    }

    if (j == "") {
        j = qp20;
    }

    if (k == "") {
        k = qp20;
    }

    if (l == "") {
        l = qp20;
    }

    if (m == "") {
        m = qp20;
    }

    if (n1 == "") {
        n1 = qp20;
    }
    if (o1 == "") {
        o1 = qp20;
    }
    if (p1 == "") {
        p1 = qp20;
    }
    if (q1 == "") {
        q1 = qp20;
    }

    if (r1 == "") {
        r1 = qp20;
    }
    if (s1 == "") {
        s1 = qp20;
    }
    if (t1 == "") {
        t1 = qp20;
    }
    if (u1 == "") {
        u1 = qp20;
    }



    //actual logic for calculation

    if ((a == 24) && (h == 60)) {
        a1 = qp61;
        grade1 = "D";
    } else if ((a == 25) && (h == 60)) {
        a1 = qp62;
        grade1 = "D";
    } else if ((a == 26) && (h == 60)) {
        a1 = qp63;
        grade1 = "D";
    } else if ((a == 27) && (h == 60)) {
        a1 = qp64;
        grade1 = "D";
    } else if ((a == 28) && (h == 60)) {
        a1 = qp65;
        grade1 = "D";
    } else if ((a == 29) && (h == 60)) {
        a1 = qp66;
        grade1 = "D";
    } else if ((a == 30) && (h == 60)) {
        a1 = qp67;
        grade1 = "C";
    } else if ((a == 31) && (h == 60)) {
        a1 = qp68;
        grade1 = "C";
    } else if ((a == 32) && (h == 60)) {
        a1 = qp69;
        grade1 = "C";
    } else if ((a == 33) && (h == 60)) {
        a1 = qp70;
        grade1 = "C";
    } else if ((a == 34) && (h == 60)) {
        a1 = qp71;
        grade1 = "C";
    } else if ((a == 35) && (h == 60)) {
        a1 = qp72;
        grade1 = "C";
    } else if ((a == 36) && (h == 60)) {
        a1 = qp73;
        grade1 = "C";
    } else if ((a == 37) && (h == 60)) {
        a1 = qp74;
        grade1 = "C";
    } else if ((a == 38) && (h == 60)) {
        a1 = qp75;
        grade1 = "C";
    } else if ((a == 39) && (h == 60)) {
        a1 = qp76;
        grade1 = "B";
    } else if ((a == 40) && (h == 60)) {
        a1 = qp77;
        grade1 = "B";
    } else if ((a == 41) && (h == 60)) {
        a1 = qp78;
        grade1 = "B";
    } else if ((a == 42) && (h == 60)) {
        a1 = qp79;
        grade1 = "B";
    } else if ((a == 43) && (h == 60)) {
        a1 = qp80;
        grade1 = "B";
    } else if ((a == 44) && (h == 60)) {
        a1 = qp81;
        grade1 = "B";
    } else if ((a == 45) && (h == 60)) {
        a1 = qp82;
        grade1 = "B";
    } else if ((a == 46) && (h == 60)) {
        a1 = qp83;
        grade1 = "B";
    } else if ((a == 47) && (h == 60)) {
        a1 = qp84;
        grade1 = "B";
    } else if ((a >= 48) && (a <= 60) && (h == 60)) {
        a1 = qp85;
        grade1 = "A";
    } else if ((a == 8) && (h == 20)) {
        a1 = qp21;
        grade1 = "D";
    } else if ((a == 9) && (h == 20)) {
        a1 = qp22;
        grade1 = "D";
    } else if ((a == 10) && (h == 20)) {
        a1 = qp23;
        grade1 = "C";
    } else if ((a == 11) && (h == 20)) {
        a1 = qp24;
        grade1 = "C";
    } else if ((a == 12) && (h == 20)) {
        a1 = qp25;
        grade1 = "C";
    } else if ((a == 13) && (h == 20)) {
        a1 = qp26;
        grade1 = "B";
    } else if ((a == 14) && (h == 20)) {
        a1 = qp27;
        grade1 = "B";
    } else if ((a == 15) && (h == 20)) {
        a1 = qp28;
        grade1 = "B";
    } else if ((a >= 16) && (a <= 20) && (h == 20)) {
        a1 = qp29;
        grade1 = "A";
    } else if ((a == 16) && (h == 40)) {
        a1 = qp41;
        grade1 = "D";
    } else if ((a == 17) && (h == 40)) {
        a1 = qp42;
        grade1 = "D";
    } else if ((a == 18) && (h == 40)) {
        a1 = qp43;
        grade1 = "D";
    } else if ((a == 19) && (h == 40)) {
        a1 = qp44;
        grade1 = "D";
    } else if ((a == 20) && (h == 40)) {
        a1 = qp45;
        grade1 = "C";
    } else if ((a == 21) && (h == 40)) {
        a1 = qp46;
        grade1 = "C";
    } else if ((a == 22) && (h == 40)) {
        a1 = qp47;
        grade1 = "C";
    } else if ((a == 23) && (h == 40)) {
        a1 = qp48;
        grade1 = "C";
    } else if ((a == 24) && (h == 40)) {
        a1 = qp49;
        grade1 = "C";
    } else if ((a == 25) && (h == 40)) {
        a1 = qp50;
        grade1 = "C";
    } else if ((a == 26) && (h == 40)) {
        a1 = qp51;
        grade1 = "B";
    } else if ((a == 27) && (h == 40)) {
        a1 = qp52;
        grade1 = "B";
    } else if ((a == 28) && (h == 40)) {
        a1 = qp53;
        grade1 = "B";
    } else if ((a == 29) && (h == 40)) {
        a1 = qp54;
        grade1 = "B";
    } else if ((a == 30) && (h == 40)) {
        a1 = qp55;
        grade1 = "B";
    } else if ((a == 31) && (h == 40)) {
        a1 = qp56;
        grade1 = "B";
    } else if ((a >= 32) && (a <= 40) && (h == 40)) {
        a1 = qp57;
        grade1 = "A";
    } else if ((a == 32) && (h == 80)) {
        a1 = qp86;
        grade1 = "D";
    } else if ((a == 33) && (h == 80)) {
        a1 = qp87;
        grade1 = "D";
    } else if ((a == 34) && (h == 80)) {
        a1 = qp88;
        grade1 = "D";
    } else if ((a == 35) && (h == 80)) {
        a1 = qp89;
        grade1 = "D";
    } else if ((a == 36) && (h == 80)) {
        a1 = qp90;
        grade1 = "D";
    } else if ((a == 37) && (h == 80)) {
        a1 = qp91;
        grade1 = "D";
    } else if ((a == 38) && (h == 80)) {
        a1 = qp92;
        grade1 = "D";
    } else if ((a == 39) && (h == 80)) {
        a1 = qp93;
        grade1 = "D";
    } else if ((a == 40) && (h == 80)) {
        a1 = qp94;
        grade1 = "C";
    } else if ((a == 41) && (h == 80)) {
        a1 = qp95;
        grade1 = "C";
    } else if ((a == 42) && (h == 80)) {
        a1 = qp96;
        grade1 = "C";
    } else if ((a == 43) && (h == 80)) {
        a1 = qp97;
        grade1 = "C";
    } else if ((a == 44) && (h == 80)) {
        a1 = qp98;
        grade1 = "C";
    } else if ((a == 45) && (h == 80)) {
        a1 = qp99;
        grade1 = "C";
    } else if ((a == 46) && (h == 80)) {
        a1 = qp100;
        grade1 = "C";
    } else if ((a == 47) && (h == 80)) {
        a1 = qp101;
        grade1 = "C";
    } else if ((a == 48) && (h == 80)) {
        a1 = qp102;
        grade1 = "C";
    } else if ((a == 49) && (h == 80)) {
        a1 = qp103;
        grade1 = "C";
    } else if ((a == 50) && (h == 80)) {
        a1 = qp104;
        grade1 = "C";
    } else if ((a == 51) && (h == 80)) {
        a1 = qp105;
        grade1 = "C";
    } else if ((a == 52) && (h == 80)) {
        a1 = qp106;
        grade1 = "B";
    } else if ((a == 53) && (h == 80)) {
        a1 = qp107;
        grade1 = "B";
    } else if ((a == 54) && (h == 80)) {
        a1 = qp108;
        grade1 = "B";
    } else if ((a == 55) && (h == 80)) {
        a1 = qp109;
        grade1 = "B";
    } else if ((a == 56) && (h == 80)) {
        a1 = qp110;
        grade1 = "B";
    } else if ((a == 57) && (h == 80)) {
        a1 = qp111;
        grade1 = "B";
    } else if ((a == 58) && (h == 80)) {
        a1 = qp112;
        grade1 = "B";
    } else if ((a == 59) && (h == 80)) {
        a1 = qp113;
        grade1 = "B";
    } else if ((a == 60) && (h == 80)) {
        a1 = qp114;
        grade1 = "B";
    } else if ((a == 61) && (h == 80)) {
        a1 = qp115;
        grade1 = "B";
    } else if ((a == 62) && (h == 80)) {
        a1 = qp116;
        grade1 = "B";
    } else if ((a == 63) && (h == 80)) {
        a1 = qp117;
        grade1 = "B";
    } else if ((a >= 64) && (a <= 80) && (h == 80)) {
        a1 = qp118;
        grade1 = "A";
    } else if ((a == 40) && (h == 100)) {
        a1 = qp120;
        grade1 = "D";
    } else if ((a == 41) && (h == 100)) {
        a1 = qp121;
        grade1 = "D";
    } else if ((a == 42) && (h == 100)) {
        a1 = qp122;
        grade1 = "D";
    } else if ((a == 43) && (h == 100)) {
        a1 = qp123;
        grade1 = "D";
    } else if ((a == 44) && (h == 100)) {
        a1 = qp124;
        grade1 = "D";
    } else if ((a == 45) && (h == 100)) {
        a1 = qp125;
        grade1 = "D";
    } else if ((a == 46) && (h == 100)) {
        a1 = qp126;
        grade1 = "D";
    } else if ((a == 47) && (h == 100)) {
        a1 = qp127;
        grade1 = "D";
    } else if ((a == 48) && (h == 100)) {
        a1 = qp128;
        grade1 = "D";
    } else if ((a == 49) && (h == 100)) {
        a1 = qp129;
        grade1 = "D";
    } else if ((a == 50) && (h == 100)) {
        a1 = qp130;
        grade1 = "C";
    } else if ((a == 51) && (h == 100)) {
        a1 = qp131;
        grade1 = "C";
    } else if ((a == 52) && (h == 100)) {
        a1 = qp132;
        grade1 = "C";
    } else if ((a == 53) && (h == 100)) {
        a1 = qp133;
        grade1 = "C";
    } else if ((a == 54) && (h == 100)) {
        a1 = qp134;
        grade1 = "C";
    } else if ((a == 55) && (h == 100)) {
        a1 = qp135;
        grade1 = "C";
    } else if ((a == 56) && (h == 100)) {
        a1 = qp136;
        grade1 = "C";
    } else if ((a == 57) && (h == 100)) {
        a1 = qp137;
        grade1 = "C";
    } else if ((a == 58) && (h == 100)) {
        a1 = qp138;
        grade1 = "C";
    } else if ((a == 59) && (h == 100)) {
        a1 = qp139;
        grade1 = "C";
    } else if ((a == 60) && (h == 100)) {
        a1 = qp140;
        grade1 = "C";
    } else if ((a == 61) && (h == 100)) {
        a1 = qp141;
        grade1 = "C";
    } else if ((a == 62) && (h == 100)) {
        a1 = qp142;
        grade1 = "C";
    } else if ((a == 63) && (h == 100)) {
        a1 = qp143;
        grade1 = "C";
    } else if ((a == 64) && (h == 100)) {
        a1 = qp144;
        grade1 = "C";
    } else if ((a == 65) && (h == 100)) {
        a1 = qp145;
        grade1 = "B";
    } else if ((a == 66) && (h == 100)) {
        a1 = qp146;
        grade1 = "B";
    } else if ((a == 67) && (h == 100)) {
        a1 = qp147;
        grade1 = "B";
    } else if ((a == 68) && (h == 100)) {
        a1 = qp148;
        grade1 = "B";
    } else if ((a == 69) && (h == 100)) {
        a1 = qp149;
        grade1 = "B";
    } else if ((a == 70) && (h == 100)) {
        a1 = qp150;
        grade1 = "B";
    } else if ((a == 71) && (h == 100)) {
        a1 = qp151;
        grade1 = "B";
    } else if ((a == 72) && (h == 100)) {
        a1 = qp152;
        grade1 = "B";
    } else if ((a == 73) && (h == 100)) {
        a1 = qp153;
        grade1 = "B";
    } else if ((a == 74) && (h == 100)) {
        a1 = qp154;
        grade1 = "B";
    } else if ((a == 75) && (h == 100)) {
        a1 = qp155;
        grade1 = "B";
    } else if ((a == 76) && (h == 100)) {
        a1 = qp156;
        grade1 = "B";
    } else if ((a == 77) && (h == 100)) {
        a1 = qp157;
        grade1 = "B";
    } else if ((a == 78) && (h == 100)) {
        a1 = qp158;
        grade1 = "B";
    } else if ((a == 79) && (h == 100)) {
        a1 = qp159;
        grade1 = "B";
    } else if ((a >= 80) && (a <= 100) && (h == 100)) {
        a1 = qp160;
        grade1 = "A";
    } else {
        a1 = qp20;
        grade1 = "NaN";
    }


    if ((b == 24) && (i == 60)) {
        b1 = qp61;
        grade2 = "D";
    } else if ((b == 25) && (i == 60)) {
        b1 = qp62;
        grade2 = "D";
    } else if ((b == 26) && (i == 60)) {
        b1 = qp63;
        grade2 = "D";
    } else if ((b == 27) && (i == 60)) {
        b1 = qp64;
        grade2 = "D";
    } else if ((b == 28) && (i == 60)) {
        b1 = qp65;
        grade2 = "D";
    } else if ((b == 29) && (i == 60)) {
        b1 = qp66;
        grade2 = "D";
    } else if ((b == 30) && (i == 60)) {
        b1 = qp67;
        grade2 = "C";
    } else if ((b == 31) && (i == 60)) {
        b1 = qp68;
        grade2 = "C";
    } else if ((b == 32) && (i == 60)) {
        b1 = qp69;
        grade2 = "C";
    } else if ((b == 33) && (i == 60)) {
        b1 = qp70;
        grade2 = "C";
    } else if ((b == 34) && (i == 60)) {
        b1 = qp71;
        grade2 = "C";
    } else if ((b == 35) && (i == 60)) {
        b1 = qp72;
        grade2 = "C";
    } else if ((b == 36) && (i == 60)) {
        b1 = qp73;
        grade2 = "C";
    } else if ((b == 37) && (i == 60)) {
        b1 = qp74;
        grade2 = "C";
    } else if ((b == 38) && (i == 60)) {
        b1 = qp75;
        grade2 = "C";
    } else if ((b == 39) && (i == 60)) {
        b1 = qp76;
        grade2 = "B";
    } else if ((b == 40) && (i == 60)) {
        b1 = qp77;
        grade2 = "B";
    } else if ((b == 41) && (i == 60)) {
        b1 = qp78;
        grade2 = "B";
    } else if ((b == 42) && (i == 60)) {
        b1 = qp79;
        grade2 = "B";
    } else if ((b == 43) && (i == 60)) {
        b1 = qp80;
        grade2 = "B";
    } else if ((b == 44) && (i == 60)) {
        b1 = qp81;
        grade2 = "B";
    } else if ((b == 45) && (i == 60)) {
        b1 = qp82;
        grade2 = "B";
    } else if ((b == 46) && (i == 60)) {
        b1 = qp83;
        grade2 = "B";
    } else if ((b == 47) && (i == 60)) {
        b1 = qp84;
        grade2 = "B";
    } else if ((b >= 48) && (b <= 60) && (i == 60)) {
        b1 = qp85;
        grade2 = "A";
    } else if ((b == 8) && (i == 20)) {
        b1 = qp21;
        grade2 = "D";
    } else if ((b == 9) && (i == 20)) {
        b1 = qp22;
        grade2 = "D";
    } else if ((b == 10) && (i == 20)) {
        b1 = qp23;
        grade2 = "C";
    } else if ((b == 11) && (i == 20)) {
        b1 = qp24;
        grade2 = "C";
    } else if ((b == 12) && (i == 20)) {
        b1 = qp25;
        grade2 = "C";
    } else if ((b == 13) && (i == 20)) {
        b1 = qp26;
        grade2 = "B";
    } else if ((b == 14) && (i == 20)) {
        b1 = qp27;
        grade2 = "B";
    } else if ((b == 15) && (i == 20)) {
        b1 = qp28;
        grade2 = "B";
    } else if ((b >= 16) && (b <= 20) && (i == 20)) {
        b1 = qp29;
        grade2 = "A";
    } else if ((b == 16) && (i == 40)) {
        b1 = qp41;
        grade2 = "D";
    } else if ((b == 17) && (i == 40)) {
        b1 = qp42;
        grade2 = "D";
    } else if ((b == 18) && (i == 40)) {
        b1 = qp43;
        grade2 = "D";
    } else if ((b == 19) && (i == 40)) {
        b1 = qp44;
        grade2 = "D";
    } else if ((b == 20) && (i == 40)) {
        b1 = qp45;
        grade2 = "C";
    } else if ((b == 21) && (i == 40)) {
        b1 = qp46;
        grade2 = "C";
    } else if ((b == 22) && (i == 40)) {
        b1 = qp47;
        grade2 = "C";
    } else if ((b == 23) && (i == 40)) {
        b1 = qp48;
        grade2 = "C";
    } else if ((b == 24) && (i == 40)) {
        b1 = qp49;
        grade2 = "C";
    } else if ((b == 25) && (i == 40)) {
        b1 = qp50;
        grade2 = "C";
    } else if ((b == 26) && (i == 40)) {
        b1 = qp51;
        grade2 = "B";
    } else if ((b == 27) && (i == 40)) {
        b1 = qp52;
        grade2 = "B";
    } else if ((b == 28) && (i == 40)) {
        b1 = qp53;
        grade2 = "B";
    } else if ((b == 29) && (i == 40)) {
        b1 = qp54;
        grade2 = "B";
    } else if ((b == 30) && (i == 40)) {
        b1 = qp55;
        grade2 = "B";
    } else if ((b == 31) && (i == 40)) {
        b1 = qp56;
        grade2 = "B";
    } else if ((b >= 32) && (b <= 40) && (i == 40)) {
        b1 = qp57;
        grade2 = "A";
    } else if ((b == 32) && (i == 80)) {
        b1 = qp86;
        grade2 = "D";
    } else if ((b == 33) && (i == 80)) {
        b1 = qp87;
        grade2 = "D";
    } else if ((b == 34) && (i == 80)) {
        b1 = qp88;
        grade2 = "D";
    } else if ((b == 35) && (i == 80)) {
        b1 = qp89;
        grade2 = "D";
    } else if ((b == 36) && (i == 80)) {
        b1 = qp90;
        grade2 = "D";
    } else if ((b == 37) && (i == 80)) {
        b1 = qp91;
        grade2 = "D";
    } else if ((b == 38) && (i == 80)) {
        b1 = qp92;
        grade2 = "D";
    } else if ((b == 39) && (i == 80)) {
        b1 = qp93;
        grade2 = "D";
    } else if ((b == 40) && (i == 80)) {
        b1 = qp94;
        grade2 = "C";
    } else if ((b == 41) && (i == 80)) {
        b1 = qp95;
        grade2 = "C";
    } else if ((b == 42) && (i == 80)) {
        b1 = qp96;
        grade2 = "C";
    } else if ((b == 43) && (i == 80)) {
        b1 = qp97;
        grade2 = "C";
    } else if ((b == 44) && (i == 80)) {
        b1 = qp98;
        grade2 = "C";
    } else if ((b == 45) && (i == 80)) {
        b1 = qp99;
        grade2 = "C";
    } else if ((b == 46) && (i == 80)) {
        b1 = qp100;
        grade2 = "C";
    } else if ((b == 47) && (i == 80)) {
        b1 = qp101;
        grade2 = "C";
    } else if ((b == 48) && (i == 80)) {
        b1 = qp102;
        grade2 = "C";
    } else if ((b == 49) && (i == 80)) {
        b1 = qp103;
        grade2 = "C";
    } else if ((b == 50) && (i == 80)) {
        b1 = qp104;
        grade2 = "C";
    } else if ((b == 51) && (i == 80)) {
        b1 = qp105;
        grade2 = "C";
    } else if ((b == 52) && (i == 80)) {
        b1 = qp106;
        grade2 = "B";
    } else if ((b == 53) && (i == 80)) {
        b1 = qp107;
        grade2 = "B";
    } else if ((b == 54) && (i == 80)) {
        b1 = qp108;
        grade2 = "B";
    } else if ((b == 55) && (i == 80)) {
        b1 = qp109;
        grade2 = "B";
    } else if ((b == 56) && (i == 80)) {
        b1 = qp110;
        grade2 = "B";
    } else if ((b == 57) && (i == 80)) {
        b1 = qp111;
        grade2 = "B";
    } else if ((b == 58) && (i == 80)) {
        b1 = qp112;
        grade2 = "B";
    } else if ((b == 59) && (i == 80)) {
        b1 = qp113;
        grade2 = "B";
    } else if ((b == 60) && (i == 80)) {
        b1 = qp114;
        grade2 = "B";
    } else if ((b == 61) && (i == 80)) {
        b1 = qp115;
        grade2 = "B";
    } else if ((b == 62) && (i == 80)) {
        b1 = qp116;
        grade2 = "B";
    } else if ((b == 63) && (i == 80)) {
        b1 = qp117;
        grade2 = "B";
    } else if ((b >= 64) && (b <= 80) && (i == 80)) {
        b1 = qp118;
        grade2 = "A";
    } else if ((b == 40) && (i == 100)) {
        b1 = qp120;
        grade2 = "D";
    } else if ((b == 41) && (i == 100)) {
        b1 = qp121;
        grade2 = "D";
    } else if ((b == 42) && (i == 100)) {
        b1 = qp122;
        grade2 = "D";
    } else if ((b == 43) && (i == 100)) {
        b1 = qp123;
        grade2 = "D";
    } else if ((b == 44) && (i == 100)) {
        b1 = qp124;
        grade2 = "D";
    } else if ((b == 45) && (i == 100)) {
        b1 = qp125;
        grade2 = "D";
    } else if ((b == 46) && (i == 100)) {
        b1 = qp126;
        grade2 = "D";
    } else if ((b == 47) && (i == 100)) {
        b1 = qp127;
        grade2 = "D";
    } else if ((b == 48) && (i == 100)) {
        b1 = qp128;
        grade2 = "D";
    } else if ((b == 49) && (i == 100)) {
        b1 = qp129;
        grade2 = "D";
    } else if ((b == 50) && (i == 100)) {
        b1 = qp130;
        grade2 = "C";
    } else if ((b == 51) && (i == 100)) {
        b1 = qp131;
        grade2 = "C";
    } else if ((b == 52) && (i == 100)) {
        b1 = qp132;
        grade2 = "C";
    } else if ((b == 53) && (i == 100)) {
        b1 = qp133;
        grade2 = "C";
    } else if ((b == 54) && (i == 100)) {
        b1 = qp134;
        grade2 = "C";
    } else if ((b == 55) && (i == 100)) {
        b1 = qp135;
        grade2 = "C";
    } else if ((b == 56) && (i == 100)) {
        b1 = qp136;
        grade2 = "C";
    } else if ((b == 57) && (i == 100)) {
        b1 = qp137;
        grade2 = "C";
    } else if ((b == 58) && (i == 100)) {
        b1 = qp138;
        grade2 = "C";
    } else if ((b == 59) && (i == 100)) {
        b1 = qp139;
        grade2 = "C";
    } else if ((b == 60) && (i == 100)) {
        b1 = qp140;
        grade2 = "C";
    } else if ((b == 61) && (i == 100)) {
        b1 = qp141;
        grade2 = "C";
    } else if ((b == 62) && (i == 100)) {
        b1 = qp142;
        grade2 = "C";
    } else if ((b == 63) && (i == 100)) {
        b1 = qp143;
        grade2 = "C";
    } else if ((b == 64) && (i == 100)) {
        b1 = qp144;
        grade2 = "C";
    } else if ((b == 65) && (i == 100)) {
        b1 = qp145;
        grade2 = "B";
    } else if ((b == 66) && (i == 100)) {
        b1 = qp146;
        grade2 = "B";
    } else if ((b == 67) && (i == 100)) {
        b1 = qp147;
        grade2 = "B";
    } else if ((b == 68) && (i == 100)) {
        b1 = qp148;
        grade2 = "B";
    } else if ((b == 69) && (i == 100)) {
        b1 = qp149;
        grade2 = "B";
    } else if ((b == 70) && (i == 100)) {
        b1 = qp150;
        grade2 = "B";
    } else if ((b == 71) && (i == 100)) {
        b1 = qp151;
        grade2 = "B";
    } else if ((b == 72) && (i == 100)) {
        b1 = qp152;
        grade2 = "B";
    } else if ((b == 73) && (i == 100)) {
        b1 = qp153;
        grade2 = "B";
    } else if ((b == 74) && (i == 100)) {
        b1 = qp154;
        grade2 = "B";
    } else if ((b == 75) && (i == 100)) {
        b1 = qp155;
        grade2 = "B";
    } else if ((b == 76) && (i == 100)) {
        b1 = qp156;
        grade2 = "B";
    } else if ((b == 77) && (i == 100)) {
        b1 = qp157;
        grade2 = "B";
    } else if ((b == 78) && (i == 100)) {
        b1 = qp158;
        grade2 = "B";
    } else if ((b == 79) && (i == 100)) {
        b1 = qp159;
        grade2 = "B";
    } else if ((b >= 80) && (b <= 100) && (i == 100)) {
        b1 = qp160;
        grade2 = "A";
    } else {
        b1 = qp20;
        grade2 = "NaN";
    }



    if ((c == 24) && (j == 60)) {
        c1 = qp61;
        grade3 = "D";
    } else if ((c == 25) && (j == 60)) {
        c1 = qp62;
        grade3 = "D";
    } else if ((c == 26) && (j == 60)) {
        c1 = qp63;
        grade3 = "D";
    } else if ((c == 27) && (j == 60)) {
        c1 = qp64;
        grade3 = "D";
    } else if ((c == 28) && (j == 60)) {
        c1 = qp65;
        grade3 = "D";
    } else if ((c == 29) && (j == 60)) {
        c1 = qp66;
        grade3 = "D";
    } else if ((c == 30) && (j == 60)) {
        c1 = qp67;
        grade3 = "C";
    } else if ((c == 31) && (j == 60)) {
        c1 = qp68;
        grade3 = "C";
    } else if ((c == 32) && (j == 60)) {
        c1 = qp69;
        grade3 = "C";
    } else if ((c == 33) && (j == 60)) {
        c1 = qp70;
        grade3 = "C";
    } else if ((c == 34) && (j == 60)) {
        c1 = qp71;
        grade3 = "C";
    } else if ((c == 35) && (j == 60)) {
        c1 = qp72;
        grade3 = "C";
    } else if ((c == 36) && (j == 60)) {
        c1 = qp73;
        grade3 = "C";
    } else if ((c == 37) && (j == 60)) {
        c1 = qp74;
        grade3 = "C";
    } else if ((c == 38) && (j == 60)) {
        c1 = qp75;
        grade3 = "C";
    } else if ((c == 39) && (j == 60)) {
        c1 = qp76;
        grade3 = "B";
    } else if ((c == 40) && (j == 60)) {
        c1 = qp77;
        grade3 = "B";
    } else if ((c == 41) && (j == 60)) {
        c1 = qp78;
        grade3 = "B";
    } else if ((c == 42) && (j == 60)) {
        c1 = qp79;
        grade3 = "B";
    } else if ((c == 43) && (j == 60)) {
        c1 = qp80;
        grade3 = "B";
    } else if ((c == 44) && (j == 60)) {
        c1 = qp81;
        grade3 = "B";
    } else if ((c == 45) && (j == 60)) {
        c1 = qp82;
        grade3 = "B";
    } else if ((c == 46) && (j == 60)) {
        c1 = qp83;
        grade3 = "B";
    } else if ((c == 47) && (j == 60)) {
        c1 = qp84;
        grade3 = "B";
    } else if ((c >= 48) && (c <= 60) && (j == 60)) {
        c1 = qp85;
        grade3 = "A";
    } else if ((c == 8) && (j == 20)) {
        c1 = qp21;
        grade3 = "D";
    } else if ((c == 9) && (j == 20)) {
        c1 = qp22;
        grade3 = "D";
    } else if ((c == 10) && (j == 20)) {
        c1 = qp23;
        grade3 = "C";
    } else if ((c == 11) && (j == 20)) {
        c1 = qp24;
        grade3 = "C";
    } else if ((c == 12) && (j == 20)) {
        c1 = qp25;
        grade3 = "C";
    } else if ((c == 13) && (j == 20)) {
        c1 = qp26;
        grade3 = "B";
    } else if ((c == 14) && (j == 20)) {
        c1 = qp27;
        grade3 = "B";
    } else if ((c == 15) && (j == 20)) {
        c1 = qp28;
        grade3 = "B";
    } else if ((c >= 16) && (c <= 20) && (j == 20)) {
        c1 = qp29;
        grade3 = "A";
    } else if ((c == 16) && (j == 40)) {
        c1 = qp41;
        grade3 = "D";
    } else if ((c == 17) && (j == 40)) {
        c1 = qp42;
        grade3 = "D";
    } else if ((c == 18) && (j == 40)) {
        c1 = qp43;
        grade3 = "D";
    } else if ((c == 19) && (j == 40)) {
        c1 = qp44;
        grade3 = "D";
    } else if ((c == 20) && (j == 40)) {
        c1 = qp45;
        grade3 = "C";
    } else if ((c == 21) && (j == 40)) {
        c1 = qp46;
        grade3 = "C";
    } else if ((c == 22) && (j == 40)) {
        c1 = qp47;
        grade3 = "C";
    } else if ((c == 23) && (j == 40)) {
        c1 = qp48;
        grade3 = "C";
    } else if ((c == 24) && (j == 40)) {
        c1 = qp49;
        grade3 = "C";
    } else if ((c == 25) && (j == 40)) {
        c1 = qp50;
        grade3 = "C";
    } else if ((c == 26) && (j == 40)) {
        c1 = qp51;
        grade3 = "B";
    } else if ((c == 27) && (j == 40)) {
        c1 = qp52;
        grade3 = "B";
    } else if ((c == 28) && (j == 40)) {
        c1 = qp53;
        grade3 = "B";
    } else if ((c == 29) && (j == 40)) {
        c1 = qp54;
        grade3 = "B";
    } else if ((c == 30) && (j == 40)) {
        c1 = qp55;
        grade3 = "B";
    } else if ((c == 31) && (j == 40)) {
        c1 = qp56;
        grade3 = "B";
    } else if ((c >= 32) && (c <= 40) && (j == 40)) {
        c1 = qp57;
        grade3 = "A";
    } else if ((c == 32) && (j == 80)) {
        c1 = qp86;
        grade3 = "D";
    } else if ((c == 33) && (j == 80)) {
        c1 = qp87;
        grade3 = "D";
    } else if ((c == 34) && (j == 80)) {
        c1 = qp88;
        grade3 = "D";
    } else if ((c == 35) && (j == 80)) {
        c1 = qp89;
        grade3 = "D";
    } else if ((c == 36) && (j == 80)) {
        c1 = qp90;
        grade3 = "D";
    } else if ((c == 37) && (j == 80)) {
        c1 = qp91;
        grade3 = "D";
    } else if ((c == 38) && (j == 80)) {
        c1 = qp92;
        grade3 = "D";
    } else if ((c == 39) && (j == 80)) {
        c1 = qp93;
        grade3 = "D";
    } else if ((c == 40) && (j == 80)) {
        c1 = qp94;
        grade3 = "C";
    } else if ((c == 41) && (j == 80)) {
        c1 = qp95;
        grade3 = "C";
    } else if ((c == 42) && (j == 80)) {
        c1 = qp96;
        grade3 = "C";
    } else if ((c == 43) && (j == 80)) {
        c1 = qp97;
        grade3 = "C";
    } else if ((c == 44) && (j == 80)) {
        c1 = qp98;
        grade3 = "C";
    } else if ((c == 45) && (j == 80)) {
        c1 = qp99;
        grade3 = "C";
    } else if ((c == 46) && (j == 80)) {
        c1 = qp100;
        grade3 = "C";
    } else if ((c == 47) && (j == 80)) {
        c1 = qp101;
        grade3 = "C";
    } else if ((c == 48) && (j == 80)) {
        c1 = qp102;
        grade3 = "C";
    } else if ((c == 49) && (j == 80)) {
        c1 = qp103;
        grade3 = "C";
    } else if ((c == 50) && (j == 80)) {
        c1 = qp104;
        grade3 = "C";
    } else if ((c == 51) && (j == 80)) {
        c1 = qp105;
        grade3 = "C";
    } else if ((c == 52) && (j == 80)) {
        c1 = qp106;
        grade3 = "B";
    } else if ((c == 53) && (j == 80)) {
        c1 = qp107;
        grade3 = "B";
    } else if ((c == 54) && (j == 80)) {
        c1 = qp108;
        grade3 = "B";
    } else if ((c == 55) && (j == 80)) {
        c1 = qp109;
        grade3 = "B";
    } else if ((c == 56) && (j == 80)) {
        c1 = qp110;
        grade3 = "B";
    } else if ((c == 57) && (j == 80)) {
        c1 = qp111;
        grade3 = "B";
    } else if ((c == 58) && (j == 80)) {
        c1 = qp112;
        grade3 = "B";
    } else if ((c == 59) && (j == 80)) {
        c1 = qp113;
        grade3 = "B";
    } else if ((c == 60) && (j == 80)) {
        c1 = qp114;
        grade3 = "B";
    } else if ((c == 61) && (j == 80)) {
        c1 = qp115;
        grade3 = "B";
    } else if ((c == 62) && (j == 80)) {
        c1 = qp116;
        grade3 = "B";
    } else if ((c == 63) && (j == 80)) {
        c1 = qp117;
        grade3 = "B";
    } else if ((c >= 64) && (c <= 80) && (j == 80)) {
        c1 = qp118;
        grade3 = "A";
    } else if ((c == 40) && (j == 100)) {
        c1 = qp120;
        grade3 = "D";
    } else if ((c == 41) && (j == 100)) {
        c1 = qp121;
        grade3 = "D";
    } else if ((c == 42) && (j == 100)) {
        c1 = qp122;
        grade3 = "D";
    } else if ((c == 43) && (j == 100)) {
        c1 = qp123;
        grade3 = "D";
    } else if ((c == 44) && (j == 100)) {
        c1 = qp124;
        grade3 = "D";
    } else if ((c == 45) && (j == 100)) {
        c1 = qp125;
        grade3 = "D";
    } else if ((c == 46) && (j == 100)) {
        c1 = qp126;
        grade3 = "D";
    } else if ((c == 47) && (j == 100)) {
        c1 = qp127;
        grade3 = "D";
    } else if ((c == 48) && (j == 100)) {
        c1 = qp128;
        grade3 = "D";
    } else if ((c == 49) && (j == 100)) {
        c1 = qp129;
        grade3 = "D";
    } else if ((c == 50) && (j == 100)) {
        c1 = qp130;
        grade3 = "C";
    } else if ((c == 51) && (j == 100)) {
        c1 = qp131;
        grade3 = "C";
    } else if ((c == 52) && (j == 100)) {
        c1 = qp132;
        grade3 = "C";
    } else if ((c == 53) && (j == 100)) {
        c1 = qp133;
        grade3 = "C";
    } else if ((c == 54) && (j == 100)) {
        c1 = qp134;
        grade3 = "C";
    } else if ((c == 55) && (j == 100)) {
        c1 = qp135;
        grade3 = "C";
    } else if ((c == 56) && (j == 100)) {
        c1 = qp136;
        grade3 = "C";
    } else if ((c == 57) && (j == 100)) {
        c1 = qp137;
        grade3 = "C";
    } else if ((c == 58) && (j == 100)) {
        c1 = qp138;
        grade3 = "C";
    } else if ((c == 59) && (j == 100)) {
        c1 = qp139;
        grade3 = "C";
    } else if ((c == 60) && (j == 100)) {
        c1 = qp140;
        grade3 = "C";
    } else if ((c == 61) && (j == 100)) {
        c1 = qp141;
        grade3 = "C";
    } else if ((c == 62) && (j == 100)) {
        c1 = qp142;
        grade3 = "C";
    } else if ((c == 63) && (j == 100)) {
        c1 = qp143;
        grade3 = "C";
    } else if ((c == 64) && (j == 100)) {
        c1 = qp144;
        grade3 = "C";
    } else if ((c == 65) && (j == 100)) {
        c1 = qp145;
        grade3 = "B";
    } else if ((c == 66) && (j == 100)) {
        c1 = qp146;
        grade3 = "B";
    } else if ((c == 67) && (j == 100)) {
        c1 = qp147;
        grade3 = "B";
    } else if ((c == 68) && (j == 100)) {
        c1 = qp148;
        grade3 = "B";
    } else if ((c == 69) && (j == 100)) {
        c1 = qp149;
        grade3 = "B";
    } else if ((c == 70) && (j == 100)) {
        c1 = qp150;
        grade3 = "B";
    } else if ((c == 71) && (j == 100)) {
        c1 = qp151;
        grade3 = "B";
    } else if ((c == 72) && (j == 100)) {
        c1 = qp152;
        grade3 = "B";
    } else if ((c == 73) && (j == 100)) {
        c1 = qp153;
        grade3 = "B";
    } else if ((c == 74) && (j == 100)) {
        c1 = qp154;
        grade3 = "B";
    } else if ((c == 75) && (j == 100)) {
        c1 = qp155;
        grade3 = "B";
    } else if ((c == 76) && (j == 100)) {
        c1 = qp156;
        grade3 = "B";
    } else if ((c == 77) && (j == 100)) {
        c1 = qp157;
        grade3 = "B";
    } else if ((c == 78) && (j == 100)) {
        c1 = qp158;
        grade3 = "B";
    } else if ((c == 79) && (j == 100)) {
        c1 = qp159;
        grade3 = "B";
    } else if ((c >= 80) && (c <= 100) && (j == 100)) {
        c1 = qp160;
        grade3 = "A";
    } else {
        c1 = qp20;
        grade3 = "NaN";
    }


    if ((d == 24) && (k == 60)) {
        d1 = qp61;
        grade4 = "D";
    } else if ((d == 25) && (k == 60)) {
        d1 = qp62;
        grade4 = "D";
    } else if ((d == 26) && (k == 60)) {
        d1 = qp63;
        grade4 = "D";
    } else if ((d == 27) && (k == 60)) {
        d1 = qp64;
        grade4 = "D";
    } else if ((d == 28) && (k == 60)) {
        d1 = qp65;
        grade4 = "D";
    } else if ((d == 29) && (k == 60)) {
        d1 = qp66;
        grade4 = "D";
    } else if ((d == 30) && (k == 60)) {
        d1 = qp67;
        grade4 = "C";
    } else if ((d == 31) && (k == 60)) {
        d1 = qp68;
        grade4 = "C";
    } else if ((d == 32) && (k == 60)) {
        d1 = qp69;
        grade4 = "C";
    } else if ((d == 33) && (k == 60)) {
        d1 = qp70;
        grade4 = "C";
    } else if ((d == 34) && (k == 60)) {
        d1 = qp71;
        grade4 = "C";
    } else if ((d == 35) && (k == 60)) {
        d1 = qp72;
        grade4 = "C";
    } else if ((d == 36) && (k == 60)) {
        d1 = qp73;
        grade4 = "C";
    } else if ((d == 37) && (k == 60)) {
        d1 = qp74;
        grade4 = "C";
    } else if ((d == 38) && (k == 60)) {
        d1 = qp75;
        grade4 = "C";
    } else if ((d == 39) && (k == 60)) {
        d1 = qp76;
        grade4 = "B";
    } else if ((d == 40) && (k == 60)) {
        d1 = qp77;
        grade4 = "B";
    } else if ((d == 41) && (k == 60)) {
        d1 = qp78;
        grade4 = "B";
    } else if ((d == 42) && (k == 60)) {
        d1 = qp79;
        grade4 = "B";
    } else if ((d == 43) && (k == 60)) {
        d1 = qp80;
        grade4 = "B";
    } else if ((d == 44) && (k == 60)) {
        d1 = qp81;
        grade4 = "B";
    } else if ((d == 45) && (k == 60)) {
        d1 = qp82;
        grade4 = "B";
    } else if ((d == 46) && (k == 60)) {
        d1 = qp83;
        grade4 = "B";
    } else if ((d == 47) && (k == 60)) {
        d1 = qp84;
        grade4 = "B";
    } else if ((d >= 48) && (d <= 60) && (k == 60)) {
        d1 = qp85;
        grade4 = "A";
    } else if ((d == 8) && (k == 20)) {
        d1 = qp21;
        grade4 = "D";
    } else if ((d == 9) && (k == 20)) {
        d1 = qp22;
        grade4 = "D";
    } else if ((d == 10) && (k == 20)) {
        d1 = qp23;
        grade4 = "C";
    } else if ((d == 11) && (k == 20)) {
        d1 = qp24;
        grade4 = "C";
    } else if ((d == 12) && (k == 20)) {
        d1 = qp25;
        grade4 = "C";
    } else if ((d == 13) && (k == 20)) {
        d1 = qp26;
        grade4 = "B";
    } else if ((d == 14) && (k == 20)) {
        d1 = qp27;
        grade4 = "B";
    } else if ((d == 15) && (k == 20)) {
        d1 = qp28;
        grade4 = "B";
    } else if ((d >= 16) && (d <= 20) && (k == 20)) {
        d1 = qp29;
        grade4 = "A";
    } else if ((d == 16) && (k == 40)) {
        d1 = qp41;
        grade4 = "D";
    } else if ((d == 17) && (k == 40)) {
        d1 = qp42;
        grade4 = "D";
    } else if ((d == 18) && (k == 40)) {
        d1 = qp43;
        grade4 = "D";
    } else if ((d == 19) && (k == 40)) {
        d1 = qp44;
        grade4 = "D";
    } else if ((d == 20) && (k == 40)) {
        d1 = qp45;
        grade4 = "C";
    } else if ((d == 21) && (k == 40)) {
        d1 = qp46;
        grade4 = "C";
    } else if ((d == 22) && (k == 40)) {
        d1 = qp47;
        grade4 = "C";
    } else if ((d == 23) && (k == 40)) {
        d1 = qp48;
        grade4 = "C";
    } else if ((d == 24) && (k == 40)) {
        d1 = qp49;
        grade4 = "C";
    } else if ((d == 25) && (k == 40)) {
        d1 = qp50;
        grade4 = "C";
    } else if ((d == 26) && (k == 40)) {
        d1 = qp51;
        grade4 = "B";
    } else if ((d == 27) && (k == 40)) {
        d1 = qp52;
        grade4 = "B";
    } else if ((d == 28) && (k == 40)) {
        d1 = qp53;
        grade4 = "B";
    } else if ((d == 29) && (k == 40)) {
        d1 = qp54;
        grade4 = "B";
    } else if ((d == 30) && (k == 40)) {
        d1 = qp55;
        grade4 = "B";
    } else if ((d == 31) && (k == 40)) {
        d1 = qp56;
        grade4 = "B";
    } else if ((d >= 32) && (d <= 40) && (k == 40)) {
        d1 = qp57;
        grade4 = "A";
    } else if ((d == 32) && (k == 80)) {
        d1 = qp86;
        grade4 = "D";
    } else if ((d == 33) && (k == 80)) {
        d1 = qp87;
        grade4 = "D";
    } else if ((d == 34) && (k == 80)) {
        d1 = qp88;
        grade4 = "D";
    } else if ((d == 35) && (k == 80)) {
        d1 = qp89;
        grade4 = "D";
    } else if ((d == 36) && (k == 80)) {
        d1 = qp90;
        grade4 = "D";
    } else if ((d == 37) && (k == 80)) {
        d1 = qp91;
        grade4 = "D";
    } else if ((d == 38) && (k == 80)) {
        d1 = qp92;
        grade4 = "D";
    } else if ((d == 39) && (k == 80)) {
        d1 = qp93;
        grade4 = "D";
    } else if ((d == 40) && (k == 80)) {
        d1 = qp94;
        grade4 = "C";
    } else if ((d == 41) && (k == 80)) {
        d1 = qp95;
        grade4 = "C";
    } else if ((d == 42) && (k == 80)) {
        d1 = qp96;
        grade4 = "C";
    } else if ((d == 43) && (k == 80)) {
        d1 = qp97;
        grade4 = "C";
    } else if ((d == 44) && (k == 80)) {
        d1 = qp98;
        grade4 = "C";
    } else if ((d == 45) && (k == 80)) {
        d1 = qp99;
        grade4 = "C";
    } else if ((d == 46) && (k == 80)) {
        d1 = qp100;
        grade4 = "C";
    } else if ((d == 47) && (k == 80)) {
        d1 = qp101;
        grade4 = "C";
    } else if ((d == 48) && (k == 80)) {
        d1 = qp102;
        grade4 = "C";
    } else if ((d == 49) && (k == 80)) {
        d1 = qp103;
        grade4 = "C";
    } else if ((d == 50) && (k == 80)) {
        d1 = qp104;
        grade4 = "C";
    } else if ((d == 51) && (k == 80)) {
        d1 = qp105;
        grade4 = "C";
    } else if ((d == 52) && (k == 80)) {
        d1 = qp106;
        grade4 = "B";
    } else if ((d == 53) && (k == 80)) {
        d1 = qp107;
        grade4 = "B";
    } else if ((d == 54) && (k == 80)) {
        d1 = qp108;
        grade4 = "B";
    } else if ((d == 55) && (k == 80)) {
        d1 = qp109;
        grade4 = "B";
    } else if ((d == 56) && (k == 80)) {
        d1 = qp110;
        grade4 = "B";
    } else if ((d == 57) && (k == 80)) {
        d1 = qp111;
        grade4 = "B";
    } else if ((d == 58) && (k == 80)) {
        d1 = qp112;
        grade4 = "B";
    } else if ((d == 59) && (k == 80)) {
        d1 = qp113;
        grade4 = "B";
    } else if ((d == 60) && (k == 80)) {
        d1 = qp114;
        grade4 = "B";
    } else if ((d == 61) && (k == 80)) {
        d1 = qp115;
        grade4 = "B";
    } else if ((d == 62) && (k == 80)) {
        d1 = qp116;
        grade4 = "B";
    } else if ((d == 63) && (k == 80)) {
        d1 = qp117;
        grade4 = "B";
    } else if ((d >= 64) && (d <= 80) && (k == 80)) {
        d1 = qp118;
        grade4 = "A";
    } else if ((d == 40) && (k == 100)) {
        d1 = qp120;
        grade4 = "D";
    } else if ((d == 41) && (k == 100)) {
        d1 = qp121;
        grade4 = "D";
    } else if ((d == 42) && (k == 100)) {
        d1 = qp122;
        grade4 = "D";
    } else if ((d == 43) && (k == 100)) {
        d1 = qp123;
        grade4 = "D";
    } else if ((d == 44) && (k == 100)) {
        d1 = qp124;
        grade4 = "D";
    } else if ((d == 45) && (k == 100)) {
        d1 = qp125;
        grade4 = "D";
    } else if ((d == 46) && (k == 100)) {
        d1 = qp126;
        grade4 = "D";
    } else if ((d == 47) && (k == 100)) {
        d1 = qp127;
        grade4 = "D";
    } else if ((d == 48) && (k == 100)) {
        d1 = qp128;
        grade4 = "D";
    } else if ((d == 49) && (k == 100)) {
        d1 = qp129;
        grade4 = "D";
    } else if ((d == 50) && (k == 100)) {
        d1 = qp130;
        grade4 = "C";
    } else if ((d == 51) && (k == 100)) {
        d1 = qp131;
        grade4 = "C";
    } else if ((d == 52) && (k == 100)) {
        d1 = qp132;
        grade4 = "C";
    } else if ((d == 53) && (k == 100)) {
        d1 = qp133;
        grade4 = "C";
    } else if ((d == 54) && (k == 100)) {
        d1 = qp134;
        grade4 = "C";
    } else if ((d == 55) && (k == 100)) {
        d1 = qp135;
        grade4 = "C";
    } else if ((d == 56) && (k == 100)) {
        d1 = qp136;
        grade4 = "C";
    } else if ((d == 57) && (k == 100)) {
        d1 = qp137;
        grade4 = "C";
    } else if ((d == 58) && (k == 100)) {
        d1 = qp138;
        grade4 = "C";
    } else if ((d == 59) && (k == 100)) {
        d1 = qp139;
        grade4 = "C";
    } else if ((d == 60) && (k == 100)) {
        d1 = qp140;
        grade4 = "C";
    } else if ((d == 61) && (k == 100)) {
        d1 = qp141;
        grade4 = "C";
    } else if ((d == 62) && (k == 100)) {
        d1 = qp142;
        grade4 = "C";
    } else if ((d == 63) && (k == 100)) {
        d1 = qp143;
        grade4 = "C";
    } else if ((d == 64) && (k == 100)) {
        d1 = qp144;
        grade4 = "C";
    } else if ((d == 65) && (k == 100)) {
        d1 = qp145;
        grade4 = "B";
    } else if ((d == 66) && (k == 100)) {
        d1 = qp146;
        grade4 = "B";
    } else if ((d == 67) && (k == 100)) {
        d1 = qp147;
        grade4 = "B";
    } else if ((d == 68) && (k == 100)) {
        d1 = qp148;
        grade4 = "B";
    } else if ((d == 69) && (k == 100)) {
        d1 = qp149;
        grade4 = "B";
    } else if ((d == 70) && (k == 100)) {
        d1 = qp150;
        grade4 = "B";
    } else if ((d == 71) && (k == 100)) {
        d1 = qp151;
        grade4 = "B";
    } else if ((d == 72) && (k == 100)) {
        d1 = qp152;
        grade4 = "B";
    } else if ((d == 73) && (k == 100)) {
        d1 = qp153;
        grade4 = "B";
    } else if ((d == 74) && (k == 100)) {
        d1 = qp154;
        grade4 = "B";
    } else if ((d == 75) && (k == 100)) {
        d1 = qp155;
        grade4 = "B";
    } else if ((d == 76) && (k == 100)) {
        d1 = qp156;
        grade4 = "B";
    } else if ((d == 77) && (k == 100)) {
        d1 = qp157;
        grade4 = "B";
    } else if ((d == 78) && (k == 100)) {
        d1 = qp158;
        grade4 = "B";
    } else if ((d == 79) && (k == 100)) {
        d1 = qp159;
        grade4 = "B";
    } else if ((d >= 80) && (d <= 100) && (k == 100)) {
        d1 = qp160;
        grade4 = "A";
    } else {
        d1 = qp20;
        grade4 = "NaN";
    }



    if ((e == 24) && (l == 60)) {
        e1 = qp61;
        grade5 = "D";
    } else if ((e == 25) && (l == 60)) {
        e1 = qp62;
        grade5 = "D";
    } else if ((e == 26) && (l == 60)) {
        e1 = qp63;
        grade5 = "D";
    } else if ((e == 27) && (l == 60)) {
        e1 = qp64;
        grade5 = "D";
    } else if ((e == 28) && (l == 60)) {
        e1 = qp65;
        grade5 = "D";
    } else if ((e == 29) && (l == 60)) {
        e1 = qp66;
        grade5 = "D";
    } else if ((e == 30) && (l == 60)) {
        e1 = qp67;
        grade5 = "C";
    } else if ((e == 31) && (l == 60)) {
        e1 = qp68;
        grade5 = "C";
    } else if ((e == 32) && (l == 60)) {
        e1 = qp69;
        grade5 = "C";
    } else if ((e == 33) && (l == 60)) {
        e1 = qp70;
        grade5 = "C";
    } else if ((e == 34) && (l == 60)) {
        e1 = qp71;
        grade5 = "C";
    } else if ((e == 35) && (l == 60)) {
        e1 = qp72;
        grade5 = "C";
    } else if ((e == 36) && (l == 60)) {
        e1 = qp73;
        grade5 = "C";
    } else if ((e == 37) && (l == 60)) {
        e1 = qp74;
        grade5 = "C";
    } else if ((e == 38) && (l == 60)) {
        e1 = qp75;
        grade5 = "C";
    } else if ((e == 39) && (l == 60)) {
        e1 = qp76;
        grade5 = "B";
    } else if ((e == 40) && (l == 60)) {
        e1 = qp77;
        grade5 = "B";
    } else if ((e == 41) && (l == 60)) {
        e1 = qp78;
        grade5 = "B";
    } else if ((e == 42) && (l == 60)) {
        e1 = qp79;
        grade5 = "B";
    } else if ((e == 43) && (l == 60)) {
        e1 = qp80;
        grade5 = "B";
    } else if ((e == 44) && (l == 60)) {
        e1 = qp81;
        grade5 = "B";
    } else if ((e == 45) && (l == 60)) {
        e1 = qp82;
        grade5 = "B";
    } else if ((e == 46) && (l == 60)) {
        e1 = qp83;
        grade5 = "B";
    } else if ((e == 47) && (l == 60)) {
        e1 = qp84;
        grade5 = "B";
    } else if ((e >= 48) && (e <= 60) && (l == 60)) {
        e1 = qp85;
        grade5 = "A";
    } else if ((e == 8) && (l == 20)) {
        e1 = qp21;
        grade5 = "D";
    } else if ((e == 9) && (l == 20)) {
        e1 = qp22;
        grade5 = "D";
    } else if ((e == 10) && (l == 20)) {
        e1 = qp23;
        grade5 = "C";
    } else if ((e == 11) && (l == 20)) {
        e1 = qp24;
        grade5 = "C";
    } else if ((e == 12) && (l == 20)) {
        e1 = qp25;
        grade5 = "C";
    } else if ((e == 13) && (l == 20)) {
        e1 = qp26;
        grade5 = "B";
    } else if ((e == 14) && (l == 20)) {
        e1 = qp27;
        grade5 = "B";
    } else if ((e == 15) && (l == 20)) {
        e1 = qp28;
        grade5 = "B";
    } else if ((e >= 16) && (e <= 20) && (l == 20)) {
        e1 = qp29;
        grade5 = "A";
    } else if ((e == 16) && (l == 40)) {
        e1 = qp41;
        grade5 = "D";
    } else if ((e == 17) && (l == 40)) {
        e1 = qp42;
        grade5 = "D";
    } else if ((e == 18) && (l == 40)) {
        e1 = qp43;
        grade5 = "D";
    } else if ((e == 19) && (l == 40)) {
        e1 = qp44;
        grade5 = "D";
    } else if ((e == 20) && (l == 40)) {
        e1 = qp45;
        grade5 = "C";
    } else if ((e == 21) && (l == 40)) {
        e1 = qp46;
        grade5 = "C";
    } else if ((e == 22) && (l == 40)) {
        e1 = qp47;
        grade5 = "C";
    } else if ((e == 23) && (l == 40)) {
        e1 = qp48;
        grade5 = "C";
    } else if ((e == 24) && (l == 40)) {
        e1 = qp49;
        grade5 = "C";
    } else if ((e == 25) && (l == 40)) {
        e1 = qp50;
        grade5 = "C";
    } else if ((e == 26) && (l == 40)) {
        e1 = qp51;
        grade5 = "B";
    } else if ((e == 27) && (l == 40)) {
        e1 = qp52;
        grade5 = "B";
    } else if ((e == 28) && (l == 40)) {
        e1 = qp53;
        grade5 = "B";
    } else if ((e == 29) && (l == 40)) {
        e1 = qp54;
        grade5 = "B";
    } else if ((e == 30) && (l == 40)) {
        e1 = qp55;
        grade5 = "B";
    } else if ((e == 31) && (l == 40)) {
        e1 = qp56;
        grade5 = "B";
    } else if ((e >= 32) && (e <= 40) && (l == 40)) {
        e1 = qp57;
        grade5 = "A";
    } else if ((e == 32) && (l == 80)) {
        e1 = qp86;
        grade5 = "D";
    } else if ((e == 33) && (l == 80)) {
        e1 = qp87;
        grade5 = "D";
    } else if ((e == 34) && (l == 80)) {
        e1 = qp88;
        grade5 = "D";
    } else if ((e == 35) && (l == 80)) {
        e1 = qp89;
        grade5 = "D";
    } else if ((e == 36) && (l == 80)) {
        e1 = qp90;
        grade5 = "D";
    } else if ((e == 37) && (l == 80)) {
        e1 = qp91;
        grade5 = "D";
    } else if ((e == 38) && (l == 80)) {
        e1 = qp92;
        grade5 = "D";
    } else if ((e == 39) && (l == 80)) {
        e1 = qp93;
        grade5 = "D";
    } else if ((e == 40) && (l == 80)) {
        e1 = qp94;
        grade5 = "C";
    } else if ((e == 41) && (l == 80)) {
        e1 = qp95;
        grade5 = "C";
    } else if ((e == 42) && (l == 80)) {
        e1 = qp96;
        grade5 = "C";
    } else if ((e == 43) && (l == 80)) {
        e1 = qp97;
        grade5 = "C";
    } else if ((e == 44) && (l == 80)) {
        e1 = qp98;
        grade5 = "C";
    } else if ((e == 45) && (l == 80)) {
        e1 = qp99;
        grade5 = "C";
    } else if ((e == 46) && (l == 80)) {
        e1 = qp100;
        grade5 = "C";
    } else if ((e == 47) && (l == 80)) {
        e1 = qp101;
        grade5 = "C";
    } else if ((e == 48) && (l == 80)) {
        e1 = qp102;
        grade5 = "C";
    } else if ((e == 49) && (l == 80)) {
        e1 = qp103;
        grade5 = "C";
    } else if ((e == 50) && (l == 80)) {
        e1 = qp104;
        grade5 = "C";
    } else if ((e == 51) && (l == 80)) {
        e1 = qp105;
        grade5 = "C";
    } else if ((e == 52) && (l == 80)) {
        e1 = qp106;
        grade5 = "B";
    } else if ((e == 53) && (l == 80)) {
        e1 = qp107;
        grade5 = "B";
    } else if ((e == 54) && (l == 80)) {
        e1 = qp108;
        grade5 = "B";
    } else if ((e == 55) && (l == 80)) {
        e1 = qp109;
        grade5 = "B";
    } else if ((e == 56) && (l == 80)) {
        e1 = qp110;
        grade5 = "B";
    } else if ((e == 57) && (l == 80)) {
        e1 = qp111;
        grade5 = "B";
    } else if ((e == 58) && (l == 80)) {
        e1 = qp112;
        grade5 = "B";
    } else if ((e == 59) && (l == 80)) {
        e1 = qp113;
        grade5 = "B";
    } else if ((e == 60) && (l == 80)) {
        e1 = qp114;
        grade5 = "B";
    } else if ((e == 61) && (l == 80)) {
        e1 = qp115;
        grade5 = "B";
    } else if ((e == 62) && (l == 80)) {
        e1 = qp116;
        grade5 = "B";
    } else if ((e == 63) && (l == 80)) {
        e1 = qp117;
        grade5 = "B";
    } else if ((e >= 64) && (e <= 80) && (l == 80)) {
        e1 = qp118;
        grade5 = "A";
    } else if ((e == 40) && (l == 100)) {
        e1 = qp120;
        grade5 = "D";
    } else if ((e == 41) && (l == 100)) {
        e1 = qp121;
        grade5 = "D";
    } else if ((e == 42) && (l == 100)) {
        e1 = qp122;
        grade5 = "D";
    } else if ((e == 43) && (l == 100)) {
        e1 = qp123;
        grade5 = "D";
    } else if ((e == 44) && (l == 100)) {
        e1 = qp124;
        grade5 = "D";
    } else if ((e == 45) && (l == 100)) {
        e1 = qp125;
        grade5 = "D";
    } else if ((e == 46) && (l == 100)) {
        e1 = qp126;
        grade5 = "D";
    } else if ((e == 47) && (l == 100)) {
        e1 = qp127;
        grade5 = "D";
    } else if ((e == 48) && (l == 100)) {
        e1 = qp128;
        grade5 = "D";
    } else if ((e == 49) && (l == 100)) {
        e1 = qp129;
        grade5 = "D";
    } else if ((e == 50) && (l == 100)) {
        e1 = qp130;
        grade5 = "C";
    } else if ((e == 51) && (l == 100)) {
        e1 = qp131;
        grade5 = "C";
    } else if ((e == 52) && (l == 100)) {
        e1 = qp132;
        grade5 = "C";
    } else if ((e == 53) && (l == 100)) {
        e1 = qp133;
        grade5 = "C";
    } else if ((e == 54) && (l == 100)) {
        e1 = qp134;
        grade5 = "C";
    } else if ((e == 55) && (l == 100)) {
        e1 = qp135;
        grade5 = "C";
    } else if ((e == 56) && (l == 100)) {
        e1 = qp136;
        grade5 = "C";
    } else if ((e == 57) && (l == 100)) {
        e1 = qp137;
        grade5 = "C";
    } else if ((e == 58) && (l == 100)) {
        e1 = qp138;
        grade5 = "C";
    } else if ((e == 59) && (l == 100)) {
        e1 = qp139;
        grade5 = "C";
    } else if ((e == 60) && (l == 100)) {
        e1 = qp140;
        grade5 = "C";
    } else if ((e == 61) && (l == 100)) {
        e1 = qp141;
        grade5 = "C";
    } else if ((e == 62) && (l == 100)) {
        e1 = qp142;
        grade5 = "C";
    } else if ((e == 63) && (l == 100)) {
        e1 = qp143;
        grade5 = "C";
    } else if ((e == 64) && (l == 100)) {
        e1 = qp144;
        grade5 = "C";
    } else if ((e == 65) && (l == 100)) {
        e1 = qp145;
        grade5 = "B";
    } else if ((e == 66) && (l == 100)) {
        e1 = qp146;
        grade5 = "B";
    } else if ((e == 67) && (l == 100)) {
        e1 = qp147;
        grade5 = "B";
    } else if ((e == 68) && (l == 100)) {
        e1 = qp148;
        grade5 = "B";
    } else if ((e == 69) && (l == 100)) {
        e1 = qp149;
        grade5 = "B";
    } else if ((e == 70) && (l == 100)) {
        e1 = qp150;
        grade5 = "B";
    } else if ((e == 71) && (l == 100)) {
        e1 = qp151;
        grade5 = "B";
    } else if ((e == 72) && (l == 100)) {
        e1 = qp152;
        grade5 = "B";
    } else if ((e == 73) && (l == 100)) {
        e1 = qp153;
        grade5 = "B";
    } else if ((e == 74) && (l == 100)) {
        e1 = qp154;
        grade5 = "B";
    } else if ((e == 75) && (l == 100)) {
        e1 = qp155;
        grade5 = "B";
    } else if ((e == 76) && (l == 100)) {
        e1 = qp156;
        grade5 = "B";
    } else if ((e == 77) && (l == 100)) {
        e1 = qp157;
        grade5 = "B";
    } else if ((e == 78) && (l == 100)) {
        e1 = qp158;
        grade5 = "B";
    } else if ((e == 79) && (l == 100)) {
        e1 = qp159;
        grade5 = "B";
    } else if ((e >= 80) && (e <= 100) && (l == 100)) {
        e1 = qp160;
        grade5 = "A";
    } else {
        e1 = qp20;
        grade5 = "NaN";
    }




    if ((f == 24) && (m == 60)) {
        f1 = qp61;
        grade6 = "D";
    } else if ((f == 25) && (m == 60)) {
        f1 = qp62;
        grade6 = "D";
    } else if ((f == 26) && (m == 60)) {
        f1 = qp63;
        grade6 = "D";
    } else if ((f == 27) && (m == 60)) {
        f1 = qp64;
        grade6 = "D";
    } else if ((f == 28) && (m == 60)) {
        f1 = qp65;
        grade6 = "D";
    } else if ((f == 29) && (m == 60)) {
        f1 = qp66;
        grade6 = "D";
    } else if ((f == 30) && (m == 60)) {
        f1 = qp67;
        grade6 = "C";
    } else if ((f == 31) && (m == 60)) {
        f1 = qp68;
        grade6 = "C";
    } else if ((f == 32) && (m == 60)) {
        f1 = qp69;
        grade6 = "C";
    } else if ((f == 33) && (m == 60)) {
        f1 = qp70;
        grade6 = "C";
    } else if ((f == 34) && (m == 60)) {
        f1 = qp71;
        grade6 = "C";
    } else if ((f == 35) && (m == 60)) {
        f1 = qp72;
        grade6 = "C";
    } else if ((f == 36) && (m == 60)) {
        f1 = qp73;
        grade6 = "C";
    } else if ((f == 37) && (m == 60)) {
        f1 = qp74;
        grade6 = "C";
    } else if ((f == 38) && (m == 60)) {
        f1 = qp75;
        grade6 = "C";
    } else if ((f == 39) && (m == 60)) {
        f1 = qp76;
        grade6 = "B";
    } else if ((f == 40) && (m == 60)) {
        f1 = qp77;
        grade6 = "B";
    } else if ((f == 41) && (m == 60)) {
        f1 = qp78;
        grade6 = "B";
    } else if ((f == 42) && (m == 60)) {
        f1 = qp79;
        grade6 = "B";
    } else if ((f == 43) && (m == 60)) {
        f1 = qp80;
        grade6 = "B";
    } else if ((f == 44) && (m == 60)) {
        f1 = qp81;
        grade6 = "B";
    } else if ((f == 45) && (m == 60)) {
        f1 = qp82;
        grade6 = "B";
    } else if ((f == 46) && (m == 60)) {
        f1 = qp83;
        grade6 = "B";
    } else if ((f == 47) && (m == 60)) {
        f1 = qp84;
        grade6 = "B";
    } else if ((f >= 48) && (f <= 60) && (m == 60)) {
        f1 = qp85;
        grade6 = "A";
    } else if ((f == 8) && (m == 20)) {
        f1 = qp21;
        grade6 = "D";
    } else if ((f == 9) && (m == 20)) {
        f1 = qp22;
        grade6 = "D";
    } else if ((f == 10) && (m == 20)) {
        f1 = qp23;
        grade6 = "C";
    } else if ((f == 11) && (m == 20)) {
        f1 = qp24;
        grade6 = "C";
    } else if ((f == 12) && (m == 20)) {
        f1 = qp25;
        grade6 = "C";
    } else if ((f == 13) && (m == 20)) {
        f1 = qp26;
        grade6 = "B";
    } else if ((f == 14) && (m == 20)) {
        f1 = qp27;
        grade6 = "B";
    } else if ((f == 15) && (m == 20)) {
        f1 = qp28;
        grade6 = "B";
    } else if ((f >= 16) && (f <= 20) && (m == 20)) {
        f1 = qp29;
        grade6 = "A";
    } else if ((f == 16) && (m == 40)) {
        f1 = qp41;
        grade6 = "D";
    } else if ((f == 17) && (m == 40)) {
        f1 = qp42;
        grade6 = "D";
    } else if ((f == 18) && (m == 40)) {
        f1 = qp43;
        grade6 = "D";
    } else if ((f == 19) && (m == 40)) {
        f1 = qp44;
        grade6 = "D";
    } else if ((f == 20) && (m == 40)) {
        f1 = qp45;
        grade6 = "C";
    } else if ((f == 21) && (m == 40)) {
        f1 = qp46;
        grade6 = "C";
    } else if ((f == 22) && (m == 40)) {
        f1 = qp47;
        grade6 = "C";
    } else if ((f == 23) && (m == 40)) {
        f1 = qp48;
        grade6 = "C";
    } else if ((f == 24) && (m == 40)) {
        f1 = qp49;
        grade6 = "C";
    } else if ((f == 25) && (m == 40)) {
        f1 = qp50;
        grade6 = "C";
    } else if ((f == 26) && (m == 40)) {
        f1 = qp51;
        grade6 = "B";
    } else if ((f == 27) && (m == 40)) {
        f1 = qp52;
        grade6 = "B";
    } else if ((f == 28) && (m == 40)) {
        f1 = qp53;
        grade6 = "B";
    } else if ((f == 29) && (m == 40)) {
        f1 = qp54;
        grade6 = "B";
    } else if ((f == 30) && (m == 40)) {
        f1 = qp55;
        grade6 = "B";
    } else if ((f == 31) && (m == 40)) {
        f1 = qp56;
        grade6 = "B";
    } else if ((f >= 32) && (f <= 40) && (m == 40)) {
        f1 = qp57;
        grade6 = "A";
    } else if ((f == 32) && (m == 80)) {
        f1 = qp86;
        grade6 = "D";
    } else if ((f == 33) && (m == 80)) {
        f1 = qp87;
        grade6 = "D";
    } else if ((f == 34) && (m == 80)) {
        f1 = qp88;
        grade6 = "D";
    } else if ((f == 35) && (m == 80)) {
        f1 = qp89;
        grade6 = "D";
    } else if ((f == 36) && (m == 80)) {
        f1 = qp90;
        grade6 = "D";
    } else if ((f == 37) && (m == 80)) {
        f1 = qp91;
        grade6 = "D";
    } else if ((f == 38) && (m == 80)) {
        f1 = qp92;
        grade6 = "D";
    } else if ((f == 39) && (m == 80)) {
        f1 = qp93;
        grade6 = "D";
    } else if ((f == 40) && (m == 80)) {
        f1 = qp94;
        grade6 = "C";
    } else if ((f == 41) && (m == 80)) {
        f1 = qp95;
        grade6 = "C";
    } else if ((f == 42) && (m == 80)) {
        f1 = qp96;
        grade6 = "C";
    } else if ((f == 43) && (m == 80)) {
        f1 = qp97;
        grade6 = "C";
    } else if ((f == 44) && (m == 80)) {
        f1 = qp98;
        grade6 = "C";
    } else if ((f == 45) && (m == 80)) {
        f1 = qp99;
        grade6 = "C";
    } else if ((f == 46) && (m == 80)) {
        f1 = qp100;
        grade6 = "C";
    } else if ((f == 47) && (m == 80)) {
        f1 = qp101;
        grade6 = "C";
    } else if ((f == 48) && (m == 80)) {
        f1 = qp102;
        grade6 = "C";
    } else if ((f == 49) && (m == 80)) {
        f1 = qp103;
        grade6 = "C";
    } else if ((f == 50) && (m == 80)) {
        f1 = qp104;
        grade6 = "C";
    } else if ((f == 51) && (m == 80)) {
        f1 = qp105;
        grade6 = "C";
    } else if ((f == 52) && (m == 80)) {
        f1 = qp106;
        grade6 = "B";
    } else if ((f == 53) && (m == 80)) {
        f1 = qp107;
        grade6 = "B";
    } else if ((f == 54) && (m == 80)) {
        f1 = qp108;
        grade6 = "B";
    } else if ((f == 55) && (m == 80)) {
        f1 = qp109;
        grade6 = "B";
    } else if ((f == 56) && (m == 80)) {
        f1 = qp110;
        grade6 = "B";
    } else if ((f == 57) && (m == 80)) {
        f1 = qp111;
        grade6 = "B";
    } else if ((f == 58) && (m == 80)) {
        f1 = qp112;
        grade6 = "B";
    } else if ((f == 59) && (m == 80)) {
        f1 = qp113;
        grade6 = "B";
    } else if ((f == 60) && (m == 80)) {
        f1 = qp114;
        grade6 = "B";
    } else if ((f == 61) && (m == 80)) {
        f1 = qp115;
        grade6 = "B";
    } else if ((f == 62) && (m == 80)) {
        f1 = qp116;
        grade6 = "B";
    } else if ((f == 63) && (m == 80)) {
        f1 = qp117;
        grade6 = "B";
    } else if ((f >= 64) && (f <= 80) && (m == 80)) {
        f1 = qp118;
        grade6 = "A";
    } else if ((f == 40) && (m == 100)) {
        f1 = qp120;
        grade6 = "D";
    } else if ((f == 41) && (m == 100)) {
        f1 = qp121;
        grade6 = "D";
    } else if ((f == 42) && (m == 100)) {
        f1 = qp122;
        grade6 = "D";
    } else if ((f == 43) && (m == 100)) {
        f1 = qp123;
        grade6 = "D";
    } else if ((f == 44) && (m == 100)) {
        f1 = qp124;
        grade6 = "D";
    } else if ((f == 45) && (m == 100)) {
        f1 = qp125;
        grade6 = "D";
    } else if ((f == 46) && (m == 100)) {
        f1 = qp126;
        grade6 = "D";
    } else if ((f == 47) && (m == 100)) {
        f1 = qp127;
        grade6 = "D";
    } else if ((f == 48) && (m == 100)) {
        f1 = qp128;
        grade6 = "D";
    } else if ((f == 49) && (m == 100)) {
        f1 = qp129;
        grade6 = "D";
    } else if ((f == 50) && (m == 100)) {
        f1 = qp130;
        grade6 = "C";
    } else if ((f == 51) && (m == 100)) {
        f1 = qp131;
        grade6 = "C";
    } else if ((f == 52) && (m == 100)) {
        f1 = qp132;
        grade6 = "C";
    } else if ((f == 53) && (m == 100)) {
        f1 = qp133;
        grade6 = "C";
    } else if ((f == 54) && (m == 100)) {
        f1 = qp134;
        grade6 = "C";
    } else if ((f == 55) && (m == 100)) {
        f1 = qp135;
        grade6 = "C";
    } else if ((f == 56) && (m == 100)) {
        f1 = qp136;
        grade6 = "C";
    } else if ((f == 57) && (m == 100)) {
        f1 = qp137;
        grade6 = "C";
    } else if ((f == 58) && (m == 100)) {
        f1 = qp138;
        grade6 = "C";
    } else if ((f == 59) && (m == 100)) {
        f1 = qp139;
        grade6 = "C";
    } else if ((f == 60) && (m == 100)) {
        f1 = qp140;
        grade6 = "C";
    } else if ((f == 61) && (m == 100)) {
        f1 = qp141;
        grade6 = "C";
    } else if ((f == 62) && (m == 100)) {
        f1 = qp142;
        grade6 = "C";
    } else if ((f == 63) && (m == 100)) {
        f1 = qp143;
        grade6 = "C";
    } else if ((f == 64) && (m == 100)) {
        f1 = qp144;
        grade6 = "C";
    } else if ((f == 65) && (m == 100)) {
        f1 = qp145;
        grade6 = "B";
    } else if ((f == 66) && (m == 100)) {
        f1 = qp146;
        grade6 = "B";
    } else if ((f == 67) && (m == 100)) {
        f1 = qp147;
        grade6 = "B";
    } else if ((f == 68) && (m == 100)) {
        f1 = qp148;
        grade6 = "B";
    } else if ((f == 69) && (m == 100)) {
        f1 = qp149;
        grade6 = "B";
    } else if ((f == 70) && (m == 100)) {
        f1 = qp150;
        grade6 = "B";
    } else if ((f == 71) && (m == 100)) {
        f1 = qp151;
        grade6 = "B";
    } else if ((f == 72) && (m == 100)) {
        f1 = qp152;
        grade6 = "B";
    } else if ((f == 73) && (m == 100)) {
        f1 = qp153;
        grade6 = "B";
    } else if ((f == 74) && (m == 100)) {
        f1 = qp154;
        grade6 = "B";
    } else if ((f == 75) && (m == 100)) {
        f1 = qp155;
        grade6 = "B";
    } else if ((f == 76) && (m == 100)) {
        f1 = qp156;
        grade6 = "B";
    } else if ((f == 77) && (m == 100)) {
        f1 = qp157;
        grade6 = "B";
    } else if ((f == 78) && (m == 100)) {
        f1 = qp158;
        grade6 = "B";
    } else if ((f == 79) && (m == 100)) {
        f1 = qp159;
        grade6 = "B";
    } else if ((f >= 80) && (f <= 100) && (m == 100)) {
        f1 = qp160;
        grade6 = "A";
    } else {
        f1 = qp20;
        grade6 = "NaN";
    }


    if ((n1 == 24) && (r1 == 60)) {
        g1 = qp61;
        grade7 = "D";
    } else if ((n1 == 25) && (r1 == 60)) {
        g1 = qp62;
        grade7 = "D";
    } else if ((n1 == 26) && (r1 == 60)) {
        g1 = qp63;
        grade7 = "D";
    } else if ((n1 == 27) && (r1 == 60)) {
        g1 = qp64;
        grade7 = "D";
    } else if ((n1 == 28) && (r1 == 60)) {
        g1 = qp65;
        grade7 = "D";
    } else if ((n1 == 29) && (r1 == 60)) {
        g1 = qp66;
        grade7 = "D";
    } else if ((n1 == 30) && (r1 == 60)) {
        g1 = qp67;
        grade7 = "C";
    } else if ((n1 == 31) && (r1 == 60)) {
        g1 = qp68;
        grade7 = "C";
    } else if ((n1 == 32) && (r1 == 60)) {
        g1 = qp69;
        grade7 = "C";
    } else if ((n1 == 33) && (r1 == 60)) {
        g1 = qp70;
        grade7 = "C";
    } else if ((n1 == 34) && (r1 == 60)) {
        g1 = qp71;
        grade7 = "C";
    } else if ((n1 == 35) && (r1 == 60)) {
        g1 = qp72;
        grade7 = "C";
    } else if ((n1 == 36) && (r1 == 60)) {
        g1 = qp73;
        grade7 = "C";
    } else if ((n1 == 37) && (r1 == 60)) {
        g1 = qp74;
        grade7 = "C";
    } else if ((n1 == 38) && (r1 == 60)) {
        g1 = qp75;
        grade7 = "C";
    } else if ((n1 == 39) && (r1 == 60)) {
        g1 = qp76;
        grade7 = "B";
    } else if ((n1 == 40) && (r1 == 60)) {
        g1 = qp77;
        grade7 = "B";
    } else if ((n1 == 41) && (r1 == 60)) {
        g1 = qp78;
        grade7 = "B";
    } else if ((n1 == 42) && (r1 == 60)) {
        g1 = qp79;
        grade7 = "B";
    } else if ((n1 == 43) && (r1 == 60)) {
        g1 = qp80;
        grade7 = "B";
    } else if ((n1 == 44) && (r1 == 60)) {
        g1 = qp81;
        grade7 = "B";
    } else if ((n1 == 45) && (r1 == 60)) {
        g1 = qp82;
        grade7 = "B";
    } else if ((n1 == 46) && (r1 == 60)) {
        g1 = qp83;
        grade7 = "B";
    } else if ((n1 == 47) && (r1 == 60)) {
        g1 = qp84;
        grade7 = "B";
    } else if ((n1 >= 48) && (n1 <= 60) && (r1 == 60)) {
        g1 = qp85;
        grade7 = "A";
    } else if ((n1 == 8) && (r1 == 20)) {
        g1 = qp21;
        grade7 = "D";
    } else if ((n1 == 9) && (r1 == 20)) {
        g1 = qp22;
        grade7 = "D";
    } else if ((n1 == 10) && (r1 == 20)) {
        g1 = qp23;
        grade7 = "C";
    } else if ((n1 == 11) && (r1 == 20)) {
        g1 = qp24;
        grade7 = "C";
    } else if ((n1 == 12) && (r1 == 20)) {
        g1 = qp25;
        grade7 = "C";
    } else if ((n1 == 13) && (r1 == 20)) {
        g1 = qp26;
        grade7 = "B";
    } else if ((n1 == 14) && (r1 == 20)) {
        g1 = qp27;
        grade7 = "B";
    } else if ((n1 == 15) && (r1 == 20)) {
        g1 = qp28;
        grade7 = "B";
    } else if ((n1 >= 16) && (n1 <= 20) && (r1 == 20)) {
        g1 = qp29;
        grade7 = "A";
    } else if ((n1 == 16) && (r1 == 40)) {
        g1 = qp41;
        grade7 = "D";
    } else if ((n1 == 17) && (r1 == 40)) {
        g1 = qp42;
        grade7 = "D";
    } else if ((n1 == 18) && (r1 == 40)) {
        g1 = qp43;
        grade7 = "D";
    } else if ((n1 == 19) && (r1 == 40)) {
        g1 = qp44;
        grade7 = "D";
    } else if ((n1 == 20) && (r1 == 40)) {
        g1 = qp45;
        grade7 = "C";
    } else if ((n1 == 21) && (r1 == 40)) {
        g1 = qp46;
        grade7 = "C";
    } else if ((n1 == 22) && (r1 == 40)) {
        g1 = qp47;
        grade7 = "C";
    } else if ((n1 == 23) && (r1 == 40)) {
        g1 = qp48;
        grade7 = "C";
    } else if ((n1 == 24) && (r1 == 40)) {
        g1 = qp49;
        grade7 = "C";
    } else if ((n1 == 25) && (r1 == 40)) {
        g1 = qp50;
        grade7 = "C";
    } else if ((n1 == 26) && (r1 == 40)) {
        g1 = qp51;
        grade7 = "B";
    } else if ((n1 == 27) && (r1 == 40)) {
        g1 = qp52;
        grade7 = "B";
    } else if ((n1 == 28) && (r1 == 40)) {
        g1 = qp53;
        grade7 = "B";
    } else if ((n1 == 29) && (r1 == 40)) {
        g1 = qp54;
        grade7 = "B";
    } else if ((n1 == 30) && (r1 == 40)) {
        g1 = qp55;
        grade7 = "B";
    } else if ((n1 == 31) && (r1 == 40)) {
        g1 = qp56;
        grade7 = "B";
    } else if ((n1 >= 32) && (n1 <= 40) && (r1 == 40)) {
        g1 = qp57;
        grade7 = "A";
    } else if ((n1 == 32) && (r1 == 80)) {
        g1 = qp86;
        grade7 = "D";
    } else if ((n1 == 33) && (r1 == 80)) {
        g1 = qp87;
        grade7 = "D";
    } else if ((n1 == 34) && (r1 == 80)) {
        g1 = qp88;
        grade7 = "D";
    } else if ((n1 == 35) && (r1 == 80)) {
        g1 = qp89;
        grade7 = "D";
    } else if ((n1 == 36) && (r1 == 80)) {
        g1 = qp90;
        grade7 = "D";
    } else if ((n1 == 37) && (r1 == 80)) {
        g1 = qp91;
        grade7 = "D";
    } else if ((n1 == 38) && (r1 == 80)) {
        g1 = qp92;
        grade7 = "D";
    } else if ((n1 == 39) && (r1 == 80)) {
        g1 = qp93;
        grade7 = "D";
    } else if ((n1 == 40) && (r1 == 80)) {
        g1 = qp94;
        grade7 = "C";
    } else if ((n1 == 41) && (r1 == 80)) {
        g1 = qp95;
        grade7 = "C";
    } else if ((n1 == 42) && (r1 == 80)) {
        g1 = qp96;
        grade7 = "C";
    } else if ((n1 == 43) && (r1 == 80)) {
        g1 = qp97;
        grade7 = "C";
    } else if ((n1 == 44) && (r1 == 80)) {
        g1 = qp98;
        grade7 = "C";
    } else if ((n1 == 45) && (r1 == 80)) {
        g1 = qp99;
        grade7 = "C";
    } else if ((n1 == 46) && (r1 == 80)) {
        g1 = qp100;
        grade7 = "C";
    } else if ((n1 == 47) && (r1 == 80)) {
        g1 = qp101;
        grade7 = "C";
    } else if ((n1 == 48) && (r1 == 80)) {
        g1 = qp102;
        grade7 = "C";
    } else if ((n1 == 49) && (r1 == 80)) {
        g1 = qp103;
        grade7 = "C";
    } else if ((n1 == 50) && (r1 == 80)) {
        g1 = qp104;
        grade7 = "C";
    } else if ((n1 == 51) && (r1 == 80)) {
        g1 = qp105;
        grade7 = "C";
    } else if ((n1 == 52) && (r1 == 80)) {
        g1 = qp106;
        grade7 = "B";
    } else if ((n1 == 53) && (r1 == 80)) {
        g1 = qp107;
        grade7 = "B";
    } else if ((n1 == 54) && (r1 == 80)) {
        g1 = qp108;
        grade7 = "B";
    } else if ((n1 == 55) && (r1 == 80)) {
        g1 = qp109;
        grade7 = "B";
    } else if ((n1 == 56) && (r1 == 80)) {
        g1 = qp110;
        grade7 = "B";
    } else if ((n1 == 57) && (r1 == 80)) {
        g1 = qp111;
        grade7 = "B";
    } else if ((n1 == 58) && (r1 == 80)) {
        g1 = qp112;
        grade7 = "B";
    } else if ((n1 == 59) && (r1 == 80)) {
        g1 = qp113;
        grade7 = "B";
    } else if ((n1 == 60) && (r1 == 80)) {
        g1 = qp114;
        grade7 = "B";
    } else if ((n1 == 61) && (r1 == 80)) {
        g1 = qp115;
        grade7 = "B";
    } else if ((n1 == 62) && (r1 == 80)) {
        g1 = qp116;
        grade7 = "B";
    } else if ((n1 == 63) && (r1 == 80)) {
        g1 = qp117;
        grade7 = "B";
    } else if ((n1 >= 64) && (n1 <= 80) && (r1 == 80)) {
        g1 = qp118;
        grade7 = "A";
    } else if ((n1 == 40) && (r1 == 100)) {
        g1 = qp120;
        grade7 = "D";
    } else if ((n1 == 41) && (r1 == 100)) {
        g1 = qp121;
        grade7 = "D";
    } else if ((n1 == 42) && (r1 == 100)) {
        g1 = qp122;
        grade7 = "D";
    } else if ((n1 == 43) && (r1 == 100)) {
        g1 = qp123;
        grade7 = "D";
    } else if ((n1 == 44) && (r1 == 100)) {
        g1 = qp124;
        grade7 = "D";
    } else if ((n1 == 45) && (r1 == 100)) {
        g1 = qp125;
        grade7 = "D";
    } else if ((n1 == 46) && (r1 == 100)) {
        g1 = qp126;
        grade7 = "D";
    } else if ((n1 == 47) && (r1 == 100)) {
        g1 = qp127;
        grade7 = "D";
    } else if ((n1 == 48) && (r1 == 100)) {
        g1 = qp128;
        grade7 = "D";
    } else if ((n1 == 49) && (r1 == 100)) {
        g1 = qp129;
        grade7 = "D";
    } else if ((n1 == 50) && (r1 == 100)) {
        g1 = qp130;
        grade7 = "C";
    } else if ((n1 == 51) && (r1 == 100)) {
        g1 = qp131;
        grade7 = "C";
    } else if ((n1 == 52) && (r1 == 100)) {
        g1 = qp132;
        grade7 = "C";
    } else if ((n1 == 53) && (r1 == 100)) {
        g1 = qp133;
        grade7 = "C";
    } else if ((n1 == 54) && (r1 == 100)) {
        g1 = qp134;
        grade7 = "C";
    } else if ((n1 == 55) && (r1 == 100)) {
        g1 = qp135;
        grade7 = "C";
    } else if ((n1 == 56) && (r1 == 100)) {
        g1 = qp136;
        grade7 = "C";
    } else if ((n1 == 57) && (r1 == 100)) {
        g1 = qp137;
        grade7 = "C";
    } else if ((n1 == 58) && (r1 == 100)) {
        g1 = qp138;
        grade7 = "C";
    } else if ((n1 == 59) && (r1 == 100)) {
        g1 = qp139;
        grade7 = "C";
    } else if ((n1 == 60) && (r1 == 100)) {
        g1 = qp140;
        grade7 = "C";
    } else if ((n1 == 61) && (r1 == 100)) {
        g1 = qp141;
        grade7 = "C";
    } else if ((n1 == 62) && (r1 == 100)) {
        g1 = qp142;
        grade7 = "C";
    } else if ((n1 == 63) && (r1 == 100)) {
        g1 = qp143;
        grade7 = "C";
    } else if ((n1 == 64) && (r1 == 100)) {
        g1 = qp144;
        grade7 = "C";
    } else if ((n1 == 65) && (r1 == 100)) {
        g1 = qp145;
        grade7 = "B";
    } else if ((n1 == 66) && (r1 == 100)) {
        g1 = qp146;
        grade7 = "B";
    } else if ((n1 == 67) && (r1 == 100)) {
        g1 = qp147;
        grade7 = "B";
    } else if ((n1 == 68) && (r1 == 100)) {
        g1 = qp148;
        grade7 = "B";
    } else if ((n1 == 69) && (r1 == 100)) {
        g1 = qp149;
        grade7 = "B";
    } else if ((n1 == 70) && (r1 == 100)) {
        g1 = qp150;
        grade7 = "B";
    } else if ((n1 == 71) && (r1 == 100)) {
        g1 = qp151;
        grade7 = "B";
    } else if ((n1 == 72) && (r1 == 100)) {
        g1 = qp152;
        grade7 = "B";
    } else if ((n1 == 73) && (r1 == 100)) {
        g1 = qp153;
        grade7 = "B";
    } else if ((n1 == 74) && (r1 == 100)) {
        g1 = qp154;
        grade7 = "B";
    } else if ((n1 == 75) && (r1 == 100)) {
        g1 = qp155;
        grade7 = "B";
    } else if ((n1 == 76) && (r1 == 100)) {
        g1 = qp156;
        grade7 = "B";
    } else if ((n1 == 77) && (r1 == 100)) {
        g1 = qp157;
        grade7 = "B";
    } else if ((n1 == 78) && (r1 == 100)) {
        g1 = qp158;
        grade7 = "B";
    } else if ((n1 == 79) && (r1 == 100)) {
        g1 = qp159;
        grade7 = "B";
    } else if ((n1 >= 80) && (n1 <= 100) && (r1 == 100)) {
        g1 = qp160;
        grade7 = "A";
    } else {
        g1 = qp20;
        grade7 = "NaN";
    }

    if ((o1 == 24) && (s1 == 60)) {
        h1 = qp61;
        grade8 = "D";
    } else if ((o1 == 25) && (s1 == 60)) {
        h1 = qp62;
        grade8 = "D";
    } else if ((o1 == 26) && (s1 == 60)) {
        h1 = qp63;
        grade8 = "D";
    } else if ((o1 == 27) && (s1 == 60)) {
        h1 = qp64;
        grade8 = "D";
    } else if ((o1 == 28) && (s1 == 60)) {
        h1 = qp65;
        grade8 = "D";
    } else if ((o1 == 29) && (s1 == 60)) {
        h1 = qp66;
        grade8 = "D";
    } else if ((o1 == 30) && (s1 == 60)) {
        h1 = qp67;
        grade8 = "C";
    } else if ((o1 == 31) && (s1 == 60)) {
        h1 = qp68;
        grade8 = "C";
    } else if ((o1 == 32) && (s1 == 60)) {
        h1 = qp69;
        grade8 = "C";
    } else if ((o1 == 33) && (s1 == 60)) {
        h1 = qp70;
        grade8 = "C";
    } else if ((o1 == 34) && (s1 == 60)) {
        h1 = qp71;
        grade8 = "C";
    } else if ((o1 == 35) && (s1 == 60)) {
        h1 = qp72;
        grade8 = "C";
    } else if ((o1 == 36) && (s1 == 60)) {
        h1 = qp73;
        grade8 = "C";
    } else if ((o1 == 37) && (s1 == 60)) {
        h1 = qp74;
        grade8 = "C";
    } else if ((o1 == 38) && (s1 == 60)) {
        h1 = qp75;
        grade8 = "C";
    } else if ((o1 == 39) && (s1 == 60)) {
        h1 = qp76;
        grade8 = "B";
    } else if ((o1 == 40) && (s1 == 60)) {
        h1 = qp77;
        grade8 = "B";
    } else if ((o1 == 41) && (s1 == 60)) {
        h1 = qp78;
        grade8 = "B";
    } else if ((o1 == 42) && (s1 == 60)) {
        h1 = qp79;
        grade8 = "B";
    } else if ((o1 == 43) && (s1 == 60)) {
        h1 = qp80;
        grade8 = "B";
    } else if ((o1 == 44) && (s1 == 60)) {
        h1 = qp81;
        grade8 = "B";
    } else if ((o1 == 45) && (s1 == 60)) {
        h1 = qp82;
        grade8 = "B";
    } else if ((o1 == 46) && (s1 == 60)) {
        h1 = qp83;
        grade8 = "B";
    } else if ((o1 == 47) && (s1 == 60)) {
        h1 = qp84;
        grade8 = "B";
    } else if ((o1 >= 48) && (o1 <= 60) && (s1 == 60)) {
        h1 = qp85;
        grade8 = "A";
    } else if ((o1 == 8) && (s1 == 20)) {
        h1 = qp21;
        grade8 = "D";
    } else if ((o1 == 9) && (s1 == 20)) {
        h1 = qp22;
        grade8 = "D";
    } else if ((o1 == 10) && (s1 == 20)) {
        h1 = qp23;
        grade8 = "C";
    } else if ((o1 == 11) && (s1 == 20)) {
        h1 = qp24;
        grade8 = "C";
    } else if ((o1 == 12) && (s1 == 20)) {
        h1 = qp25;
        grade8 = "C";
    } else if ((o1 == 13) && (s1 == 20)) {
        h1 = qp26;
        grade8 = "B";
    } else if ((o1 == 14) && (s1 == 20)) {
        h1 = qp27;
        grade8 = "B";
    } else if ((o1 == 15) && (s1 == 20)) {
        h1 = qp28;
        grade8 = "B";
    } else if ((o1 >= 16) && (o1 <= 20) && (s1 == 20)) {
        h1 = qp29;
        grade8 = "A";
    } else if ((o1 == 16) && (s1 == 40)) {
        h1 = qp41;
        grade8 = "D";
    } else if ((o1 == 17) && (s1 == 40)) {
        h1 = qp42;
        grade8 = "D";
    } else if ((o1 == 18) && (s1 == 40)) {
        h1 = qp43;
        grade8 = "D";
    } else if ((o1 == 19) && (s1 == 40)) {
        h1 = qp44;
        grade8 = "D";
    } else if ((o1 == 20) && (s1 == 40)) {
        h1 = qp45;
        grade8 = "C";
    } else if ((o1 == 21) && (s1 == 40)) {
        h1 = qp46;
        grade8 = "C";
    } else if ((o1 == 22) && (s1 == 40)) {
        h1 = qp47;
        grade8 = "C";
    } else if ((o1 == 23) && (s1 == 40)) {
        h1 = qp48;
        grade8 = "C";
    } else if ((o1 == 24) && (s1 == 40)) {
        h1 = qp49;
        grade8 = "C";
    } else if ((o1 == 25) && (s1 == 40)) {
        h1 = qp50;
        grade8 = "C";
    } else if ((o1 == 26) && (s1 == 40)) {
        h1 = qp51;
        grade8 = "B";
    } else if ((o1 == 27) && (s1 == 40)) {
        h1 = qp52;
        grade8 = "B";
    } else if ((o1 == 28) && (s1 == 40)) {
        h1 = qp53;
        grade8 = "B";
    } else if ((o1 == 29) && (s1 == 40)) {
        h1 = qp54;
        grade8 = "B";
    } else if ((o1 == 30) && (s1 == 40)) {
        h1 = qp55;
        grade8 = "B";
    } else if ((o1 == 31) && (s1 == 40)) {
        h1 = qp56;
        grade8 = "B";
    } else if ((o1 >= 32) && (o1 <= 40) && (s1 == 40)) {
        h1 = qp57;
        grade8 = "A";
    } else if ((o1 == 32) && (s1 == 80)) {
        h1 = qp86;
        grade8 = "D";
    } else if ((o1 == 33) && (s1 == 80)) {
        h1 = qp87;
        grade8 = "D";
    } else if ((o1 == 34) && (s1 == 80)) {
        h1 = qp88;
        grade8 = "D";
    } else if ((o1 == 35) && (s1 == 80)) {
        h1 = qp89;
        grade8 = "D";
    } else if ((o1 == 36) && (s1 == 80)) {
        h1 = qp90;
        grade8 = "D";
    } else if ((o1 == 37) && (s1 == 80)) {
        h1 = qp91;
        grade8 = "D";
    } else if ((o1 == 38) && (s1 == 80)) {
        h1 = qp92;
        grade8 = "D";
    } else if ((o1 == 39) && (s1 == 80)) {
        h1 = qp93;
        grade8 = "D";
    } else if ((o1 == 40) && (s1 == 80)) {
        h1 = qp94;
        grade8 = "C";
    } else if ((o1 == 41) && (s1 == 80)) {
        h1 = qp95;
        grade8 = "C";
    } else if ((o1 == 42) && (s1 == 80)) {
        h1 = qp96;
        grade8 = "C";
    } else if ((o1 == 43) && (s1 == 80)) {
        h1 = qp97;
        grade8 = "C";
    } else if ((o1 == 44) && (s1 == 80)) {
        h1 = qp98;
        grade8 = "C";
    } else if ((o1 == 45) && (s1 == 80)) {
        h1 = qp99;
        grade8 = "C";
    } else if ((o1 == 46) && (s1 == 80)) {
        h1 = qp100;
        grade8 = "C";
    } else if ((o1 == 47) && (s1 == 80)) {
        h1 = qp101;
        grade8 = "C";
    } else if ((o1 == 48) && (s1 == 80)) {
        h1 = qp102;
        grade8 = "C";
    } else if ((o1 == 49) && (s1 == 80)) {
        h1 = qp103;
        grade8 = "C";
    } else if ((o1 == 50) && (s1 == 80)) {
        h1 = qp104;
        grade8 = "C";
    } else if ((o1 == 51) && (s1 == 80)) {
        h1 = qp105;
        grade8 = "C";
    } else if ((o1 == 52) && (s1 == 80)) {
        h1 = qp106;
        grade8 = "B";
    } else if ((o1 == 53) && (s1 == 80)) {
        h1 = qp107;
        grade8 = "B";
    } else if ((o1 == 54) && (s1 == 80)) {
        h1 = qp108;
        grade8 = "B";
    } else if ((o1 == 55) && (s1 == 80)) {
        h1 = qp109;
        grade8 = "B";
    } else if ((o1 == 56) && (s1 == 80)) {
        h1 = qp110;
        grade8 = "B";
    } else if ((o1 == 57) && (s1 == 80)) {
        h1 = qp111;
        grade8 = "B";
    } else if ((o1 == 58) && (s1 == 80)) {
        h1 = qp112;
        grade8 = "B";
    } else if ((o1 == 59) && (s1 == 80)) {
        h1 = qp113;
        grade8 = "B";
    } else if ((o1 == 60) && (s1 == 80)) {
        h1 = qp114;
        grade8 = "B";
    } else if ((o1 == 61) && (s1 == 80)) {
        h1 = qp115;
        grade8 = "B";
    } else if ((o1 == 62) && (s1 == 80)) {
        h1 = qp116;
        grade8 = "B";
    } else if ((o1 == 63) && (s1 == 80)) {
        h1 = qp117;
        grade8 = "B";
    } else if ((o1 >= 64) && (o1 <= 80) && (s1 == 80)) {
        h1 = qp118;
        grade8 = "A";
    } else if ((o1 == 40) && (s1 == 100)) {
        h1 = qp120;
        grade8 = "D";
    } else if ((o1 == 41) && (s1 == 100)) {
        h1 = qp121;
        grade8 = "D";
    } else if ((o1 == 42) && (s1 == 100)) {
        h1 = qp122;
        grade8 = "D";
    } else if ((o1 == 43) && (s1 == 100)) {
        h1 = qp123;
        grade8 = "D";
    } else if ((o1 == 44) && (s1 == 100)) {
        h1 = qp124;
        grade8 = "D";
    } else if ((o1 == 45) && (s1 == 100)) {
        h1 = qp125;
        grade8 = "D";
    } else if ((o1 == 46) && (s1 == 100)) {
        h1 = qp126;
        grade8 = "D";
    } else if ((o1 == 47) && (s1 == 100)) {
        h1 = qp127;
        grade8 = "D";
    } else if ((o1 == 48) && (s1 == 100)) {
        h1 = qp128;
        grade8 = "D";
    } else if ((o1 == 49) && (s1 == 100)) {
        h1 = qp129;
        grade8 = "D";
    } else if ((o1 == 50) && (s1 == 100)) {
        h1 = qp130;
        grade8 = "C";
    } else if ((o1 == 51) && (s1 == 100)) {
        h1 = qp131;
        grade8 = "C";
    } else if ((o1 == 52) && (s1 == 100)) {
        h1 = qp132;
        grade8 = "C";
    } else if ((o1 == 53) && (s1 == 100)) {
        h1 = qp133;
        grade8 = "C";
    } else if ((o1 == 54) && (s1 == 100)) {
        h1 = qp134;
        grade8 = "C";
    } else if ((o1 == 55) && (s1 == 100)) {
        h1 = qp135;
        grade8 = "C";
    } else if ((o1 == 56) && (s1 == 100)) {
        h1 = qp136;
        grade8 = "C";
    } else if ((o1 == 57) && (s1 == 100)) {
        h1 = qp137;
        grade8 = "C";
    } else if ((o1 == 58) && (s1 == 100)) {
        h1 = qp138;
        grade8 = "C";
    } else if ((o1 == 59) && (s1 == 100)) {
        h1 = qp139;
        grade8 = "C";
    } else if ((o1 == 60) && (s1 == 100)) {
        h1 = qp140;
        grade8 = "C";
    } else if ((o1 == 61) && (s1 == 100)) {
        h1 = qp141;
        grade8 = "C";
    } else if ((o1 == 62) && (s1 == 100)) {
        h1 = qp142;
        grade8 = "C";
    } else if ((o1 == 63) && (s1 == 100)) {
        h1 = qp143;
        grade8 = "C";
    } else if ((o1 == 64) && (s1 == 100)) {
        h1 = qp144;
        grade8 = "C";
    } else if ((o1 == 65) && (s1 == 100)) {
        h1 = qp145;
        grade8 = "B";
    } else if ((o1 == 66) && (s1 == 100)) {
        h1 = qp146;
        grade8 = "B";
    } else if ((o1 == 67) && (s1 == 100)) {
        h1 = qp147;
        grade8 = "B";
    } else if ((o1 == 68) && (s1 == 100)) {
        h1 = qp148;
        grade8 = "B";
    } else if ((o1 == 69) && (s1 == 100)) {
        h1 = qp149;
        grade8 = "B";
    } else if ((o1 == 70) && (s1 == 100)) {
        h1 = qp150;
        grade8 = "B";
    } else if ((o1 == 71) && (s1 == 100)) {
        h1 = qp151;
        grade8 = "B";
    } else if ((o1 == 72) && (s1 == 100)) {
        h1 = qp152;
        grade8 = "B";
    } else if ((o1 == 73) && (s1 == 100)) {
        h1 = qp153;
        grade8 = "B";
    } else if ((o1 == 74) && (s1 == 100)) {
        h1 = qp154;
        grade8 = "B";
    } else if ((o1 == 75) && (s1 == 100)) {
        h1 = qp155;
        grade8 = "B";
    } else if ((o1 == 76) && (s1 == 100)) {
        h1 = qp156;
        grade8 = "B";
    } else if ((o1 == 77) && (s1 == 100)) {
        h1 = qp157;
        grade8 = "B";
    } else if ((o1 == 78) && (s1 == 100)) {
        h1 = qp158;
        grade8 = "B";
    } else if ((o1 == 79) && (s1 == 100)) {
        h1 = qp159;
        grade8 = "B";
    } else if ((o1 >= 80) && (o1 <= 100) && (s1 == 100)) {
        h1 = qp160;
        grade8 = "A";
    } else {
        h1 = qp20;
        grade8 = "NaN";
    }


    if ((p1 == 24) && (t1 == 60)) {
        i1 = qp61;
        grade9 = "D";
    } else if ((p1 == 25) && (t1 == 60)) {
        i1 = qp62;
        grade9 = "D";
    } else if ((p1 == 26) && (t1 == 60)) {
        i1 = qp63;
        grade9 = "D";
    } else if ((p1 == 27) && (t1 == 60)) {
        i1 = qp64;
        grade9 = "D";
    } else if ((p1 == 28) && (t1 == 60)) {
        i1 = qp65;
        grade9 = "D";
    } else if ((p1 == 29) && (t1 == 60)) {
        i1 = qp66;
        grade9 = "D";
    } else if ((p1 == 30) && (t1 == 60)) {
        i1 = qp67;
        grade9 = "C";
    } else if ((p1 == 31) && (t1 == 60)) {
        i1 = qp68;
        grade9 = "C";
    } else if ((p1 == 32) && (t1 == 60)) {
        i1 = qp69;
        grade9 = "C";
    } else if ((p1 == 33) && (t1 == 60)) {
        i1 = qp70;
        grade9 = "C";
    } else if ((p1 == 34) && (t1 == 60)) {
        i1 = qp71;
        grade9 = "C";
    } else if ((p1 == 35) && (t1 == 60)) {
        i1 = qp72;
        grade9 = "C";
    } else if ((p1 == 36) && (t1 == 60)) {
        i1 = qp73;
        grade9 = "C";
    } else if ((p1 == 37) && (t1 == 60)) {
        i1 = qp74;
        grade9 = "C";
    } else if ((p1 == 38) && (t1 == 60)) {
        i1 = qp75;
        grade9 = "C";
    } else if ((p1 == 39) && (t1 == 60)) {
        i1 = qp76;
        grade9 = "B";
    } else if ((p1 == 40) && (t1 == 60)) {
        i1 = qp77;
        grade9 = "B";
    } else if ((p1 == 41) && (t1 == 60)) {
        i1 = qp78;
        grade9 = "B";
    } else if ((p1 == 42) && (t1 == 60)) {
        i1 = qp79;
        grade9 = "B";
    } else if ((p1 == 43) && (t1 == 60)) {
        i1 = qp80;
        grade9 = "B";
    } else if ((p1 == 44) && (t1 == 60)) {
        i1 = qp81;
        grade9 = "B";
    } else if ((p1 == 45) && (t1 == 60)) {
        i1 = qp82;
        grade9 = "B";
    } else if ((p1 == 46) && (t1 == 60)) {
        i1 = qp83;
        grade9 = "B";
    } else if ((p1 == 47) && (t1 == 60)) {
        i1 = qp84;
        grade9 = "B";
    } else if ((p1 >= 48) && (p1 <= 60) && (t1 == 60)) {
        i1 = qp85;
        grade9 = "A";
    } else if ((p1 == 8) && (t1 == 20)) {
        i1 = qp21;
        grade9 = "D";
    } else if ((p1 == 9) && (t1 == 20)) {
        i1 = qp22;
        grade9 = "D";
    } else if ((p1 == 10) && (t1 == 20)) {
        i1 = qp23;
        grade9 = "C";
    } else if ((p1 == 11) && (t1 == 20)) {
        i1 = qp24;
        grade9 = "C";
    } else if ((p1 == 12) && (t1 == 20)) {
        i1 = qp25;
        grade9 = "C";
    } else if ((p1 == 13) && (t1 == 20)) {
        i1 = qp26;
        grade9 = "B";
    } else if ((p1 == 14) && (t1 == 20)) {
        i1 = qp27;
        grade9 = "B";
    } else if ((p1 == 15) && (t1 == 20)) {
        i1 = qp28;
        grade9 = "B";
    } else if ((p1 >= 16) && (p1 <= 20) && (t1 == 20)) {
        i1 = qp29;
        grade9 = "A";
    } else if ((p1 == 16) && (t1 == 40)) {
        i1 = qp41;
        grade9 = "D";
    } else if ((p1 == 17) && (t1 == 40)) {
        i1 = qp42;
        grade9 = "D";
    } else if ((p1 == 18) && (t1 == 40)) {
        i1 = qp43;
        grade9 = "D";
    } else if ((p1 == 19) && (t1 == 40)) {
        i1 = qp44;
        grade9 = "D";
    } else if ((p1 == 20) && (t1 == 40)) {
        i1 = qp45;
        grade9 = "C";
    } else if ((p1 == 21) && (t1 == 40)) {
        i1 = qp46;
        grade9 = "C";
    } else if ((p1 == 22) && (t1 == 40)) {
        i1 = qp47;
        grade9 = "C";
    } else if ((p1 == 23) && (t1 == 40)) {
        i1 = qp48;
        grade9 = "C";
    } else if ((p1 == 24) && (t1 == 40)) {
        i1 = qp49;
        grade9 = "C";
    } else if ((p1 == 25) && (t1 == 40)) {
        i1 = qp50;
        grade9 = "C";
    } else if ((p1 == 26) && (t1 == 40)) {
        i1 = qp51;
        grade9 = "B";
    } else if ((p1 == 27) && (t1 == 40)) {
        i1 = qp52;
        grade9 = "B";
    } else if ((p1 == 28) && (t1 == 40)) {
        i1 = qp53;
        grade9 = "B";
    } else if ((p1 == 29) && (t1 == 40)) {
        i1 = qp54;
        grade9 = "B";
    } else if ((p1 == 30) && (t1 == 40)) {
        i1 = qp55;
        grade9 = "B";
    } else if ((p1 == 31) && (t1 == 40)) {
        i1 = qp56;
        grade9 = "B";
    } else if ((p1 >= 32) && (p1 <= 40) && (t1 == 40)) {
        i1 = qp57;
        grade9 = "A";
    } else if ((p1 == 32) && (t1 == 80)) {
        i1 = qp86;
        grade9 = "D";
    } else if ((p1 == 33) && (t1 == 80)) {
        i1 = qp87;
        grade9 = "D";
    } else if ((p1 == 34) && (t1 == 80)) {
        i1 = qp88;
        grade9 = "D";
    } else if ((p1 == 35) && (t1 == 80)) {
        i1 = qp89;
        grade9 = "D";
    } else if ((p1 == 36) && (t1 == 80)) {
        i1 = qp90;
        grade9 = "D";
    } else if ((p1 == 37) && (t1 == 80)) {
        i1 = qp91;
        grade9 = "D";
    } else if ((p1 == 38) && (t1 == 80)) {
        i1 = qp92;
        grade9 = "D";
    } else if ((p1 == 39) && (t1 == 80)) {
        i1 = qp93;
        grade9 = "D";
    } else if ((p1 == 40) && (t1 == 80)) {
        i1 = qp94;
        grade9 = "C";
    } else if ((p1 == 41) && (t1 == 80)) {
        i1 = qp95;
        grade9 = "C";
    } else if ((p1 == 42) && (t1 == 80)) {
        i1 = qp96;
        grade9 = "C";
    } else if ((p1 == 43) && (t1 == 80)) {
        i1 = qp97;
        grade9 = "C";
    } else if ((p1 == 44) && (t1 == 80)) {
        i1 = qp98;
        grade9 = "C";
    } else if ((p1 == 45) && (t1 == 80)) {
        i1 = qp99;
        grade9 = "C";
    } else if ((p1 == 46) && (t1 == 80)) {
        i1 = qp100;
        grade9 = "C";
    } else if ((p1 == 47) && (t1 == 80)) {
        i1 = qp101;
        grade9 = "C";
    } else if ((p1 == 48) && (t1 == 80)) {
        i1 = qp102;
        grade9 = "C";
    } else if ((p1 == 49) && (t1 == 80)) {
        i1 = qp103;
        grade9 = "C";
    } else if ((p1 == 50) && (t1 == 80)) {
        i1 = qp104;
        grade9 = "C";
    } else if ((p1 == 51) && (t1 == 80)) {
        i1 = qp105;
        grade9 = "C";
    } else if ((p1 == 52) && (t1 == 80)) {
        i1 = qp106;
        grade9 = "B";
    } else if ((p1 == 53) && (t1 == 80)) {
        i1 = qp107;
        grade9 = "B";
    } else if ((p1 == 54) && (t1 == 80)) {
        i1 = qp108;
        grade9 = "B";
    } else if ((p1 == 55) && (t1 == 80)) {
        i1 = qp109;
        grade9 = "B";
    } else if ((p1 == 56) && (t1 == 80)) {
        i1 = qp110;
        grade9 = "B";
    } else if ((p1 == 57) && (t1 == 80)) {
        i1 = qp111;
        grade9 = "B";
    } else if ((p1 == 58) && (t1 == 80)) {
        i1 = qp112;
        grade9 = "B";
    } else if ((p1 == 59) && (t1 == 80)) {
        i1 = qp113;
        grade9 = "B";
    } else if ((p1 == 60) && (t1 == 80)) {
        i1 = qp114;
        grade9 = "B";
    } else if ((p1 == 61) && (t1 == 80)) {
        i1 = qp115;
        grade9 = "B";
    } else if ((p1 == 62) && (t1 == 80)) {
        i1 = qp116;
        grade9 = "B";
    } else if ((p1 == 63) && (t1 == 80)) {
        i1 = qp117;
        grade9 = "B";
    } else if ((p1 >= 64) && (p1 <= 80) && (t1 == 80)) {
        i1 = qp118;
        grade9 = "A";
    } else if ((p1 == 40) && (t1 == 100)) {
        i1 = qp120;
        grade9 = "D";
    } else if ((p1 == 41) && (t1 == 100)) {
        i1 = qp121;
        grade9 = "D";
    } else if ((p1 == 42) && (t1 == 100)) {
        i1 = qp122;
        grade9 = "D";
    } else if ((p1 == 43) && (t1 == 100)) {
        i1 = qp123;
        grade9 = "D";
    } else if ((p1 == 44) && (t1 == 100)) {
        i1 = qp124;
        grade9 = "D";
    } else if ((p1 == 45) && (t1 == 100)) {
        i1 = qp125;
        grade9 = "D";
    } else if ((p1 == 46) && (t1 == 100)) {
        i1 = qp126;
        grade9 = "D";
    } else if ((p1 == 47) && (t1 == 100)) {
        i1 = qp127;
        grade9 = "D";
    } else if ((p1 == 48) && (t1 == 100)) {
        i1 = qp128;
        grade9 = "D";
    } else if ((p1 == 49) && (t1 == 100)) {
        i1 = qp129;
        grade9 = "D";
    } else if ((p1 == 50) && (t1 == 100)) {
        i1 = qp130;
        grade9 = "C";
    } else if ((p1 == 51) && (t1 == 100)) {
        i1 = qp131;
        grade9 = "C";
    } else if ((p1 == 52) && (t1 == 100)) {
        i1 = qp132;
        grade9 = "C";
    } else if ((p1 == 53) && (t1 == 100)) {
        i1 = qp133;
        grade9 = "C";
    } else if ((p1 == 54) && (t1 == 100)) {
        i1 = qp134;
        grade9 = "C";
    } else if ((p1 == 55) && (t1 == 100)) {
        i1 = qp135;
        grade9 = "C";
    } else if ((p1 == 56) && (t1 == 100)) {
        i1 = qp136;
        grade9 = "C";
    } else if ((p1 == 57) && (t1 == 100)) {
        i1 = qp137;
        grade9 = "C";
    } else if ((p1 == 58) && (t1 == 100)) {
        i1 = qp138;
        grade9 = "C";
    } else if ((p1 == 59) && (t1 == 100)) {
        i1 = qp139;
        grade9 = "C";
    } else if ((p1 == 60) && (t1 == 100)) {
        i1 = qp140;
        grade9 = "C";
    } else if ((p1 == 61) && (t1 == 100)) {
        i1 = qp141;
        grade9 = "C";
    } else if ((p1 == 62) && (t1 == 100)) {
        i1 = qp142;
        grade9 = "C";
    } else if ((p1 == 63) && (t1 == 100)) {
        i1 = qp143;
        grade9 = "C";
    } else if ((p1 == 64) && (t1 == 100)) {
        i1 = qp144;
        grade9 = "C";
    } else if ((p1 == 65) && (t1 == 100)) {
        i1 = qp145;
        grade9 = "B";
    } else if ((p1 == 66) && (t1 == 100)) {
        i1 = qp146;
        grade9 = "B";
    } else if ((p1 == 67) && (t1 == 100)) {
        i1 = qp147;
        grade9 = "B";
    } else if ((p1 == 68) && (t1 == 100)) {
        i1 = qp148;
        grade9 = "B";
    } else if ((p1 == 69) && (t1 == 100)) {
        i1 = qp149;
        grade9 = "B";
    } else if ((p1 == 70) && (t1 == 100)) {
        i1 = qp150;
        grade9 = "B";
    } else if ((p1 == 71) && (t1 == 100)) {
        i1 = qp151;
        grade9 = "B";
    } else if ((p1 == 72) && (t1 == 100)) {
        i1 = qp152;
        grade9 = "B";
    } else if ((p1 == 73) && (t1 == 100)) {
        i1 = qp153;
        grade9 = "B";
    } else if ((p1 == 74) && (t1 == 100)) {
        i1 = qp154;
        grade9 = "B";
    } else if ((p1 == 75) && (t1 == 100)) {
        i1 = qp155;
        grade9 = "B";
    } else if ((p1 == 76) && (t1 == 100)) {
        i1 = qp156;
        grade9 = "B";
    } else if ((p1 == 77) && (t1 == 100)) {
        i1 = qp157;
        grade9 = "B";
    } else if ((p1 == 78) && (t1 == 100)) {
        i1 = qp158;
        grade9 = "B";
    } else if ((p1 == 79) && (t1 == 100)) {
        i1 = qp159;
        grade9 = "B";
    } else if ((p1 >= 80) && (p1 <= 100) && (t1 == 100)) {
        i1 = qp160;
        grade9 = "A";
    } else {
        i1 = qp20;
        grade9 = "NaN";
    }

    if ((q1 == 24) && (u1 == 60)) {
        j1 = qp61;
        grade10 = "D";
    } else if ((q1 == 25) && (u1 == 60)) {
        j1 = qp62;
        grade10 = "D";
    } else if ((q1 == 26) && (u1 == 60)) {
        j1 = qp63;
        grade10 = "D";
    } else if ((q1 == 27) && (u1 == 60)) {
        j1 = qp64;
        grade10 = "D";
    } else if ((q1 == 28) && (u1 == 60)) {
        j1 = qp65;
        grade10 = "D";
    } else if ((q1 == 29) && (u1 == 60)) {
        j1 = qp66;
        grade10 = "D";
    } else if ((q1 == 30) && (u1 == 60)) {
        j1 = qp67;
        grade10 = "C";
    } else if ((q1 == 31) && (u1 == 60)) {
        j1 = qp68;
        grade10 = "C";
    } else if ((q1 == 32) && (u1 == 60)) {
        j1 = qp69;
        grade10 = "C";
    } else if ((q1 == 33) && (u1 == 60)) {
        j1 = qp70;
        grade10 = "C";
    } else if ((q1 == 34) && (u1 == 60)) {
        j1 = qp71;
        grade10 = "C";
    } else if ((q1 == 35) && (u1 == 60)) {
        j1 = qp72;
        grade10 = "C";
    } else if ((q1 == 36) && (u1 == 60)) {
        j1 = qp73;
        grade10 = "C";
    } else if ((q1 == 37) && (u1 == 60)) {
        j1 = qp74;
        grade10 = "C";
    } else if ((q1 == 38) && (u1 == 60)) {
        j1 = qp75;
        grade10 = "C";
    } else if ((q1 == 39) && (u1 == 60)) {
        j1 = qp76;
        grade10 = "B";
    } else if ((q1 == 40) && (u1 == 60)) {
        j1 = qp77;
        grade10 = "B";
    } else if ((q1 == 41) && (u1 == 60)) {
        j1 = qp78;
        grade10 = "B";
    } else if ((q1 == 42) && (u1 == 60)) {
        j1 = qp79;
        grade10 = "B";
    } else if ((q1 == 43) && (u1 == 60)) {
        j1 = qp80;
        grade10 = "B";
    } else if ((q1 == 44) && (u1 == 60)) {
        j1 = qp81;
        grade10 = "B";
    } else if ((q1 == 45) && (u1 == 60)) {
        j1 = qp82;
        grade10 = "B";
    } else if ((q1 == 46) && (u1 == 60)) {
        j1 = qp83;
        grade10 = "B";
    } else if ((q1 == 47) && (u1 == 60)) {
        j1 = qp84;
        grade10 = "B";
    } else if ((q1 >= 48) && (q1 <= 60) && (u1 == 60)) {
        j1 = qp85;
        grade10 = "A";
    } else if ((q1 == 8) && (u1 == 20)) {
        j1 = qp21;
        grade10 = "D";
    } else if ((q1 == 9) && (u1 == 20)) {
        j1 = qp22;
        grade10 = "D";
    } else if ((q1 == 10) && (u1 == 20)) {
        j1 = qp23;
        grade10 = "C";
    } else if ((q1 == 11) && (u1 == 20)) {
        j1 = qp24;
        grade10 = "C";
    } else if ((q1 == 12) && (u1 == 20)) {
        j1 = qp25;
        grade10 = "C";
    } else if ((q1 == 13) && (u1 == 20)) {
        j1 = qp26;
        grade10 = "B";
    } else if ((q1 == 14) && (u1 == 20)) {
        j1 = qp27;
        grade10 = "B";
    } else if ((q1 == 15) && (u1 == 20)) {
        j1 = qp28;
        grade10 = "B";
    } else if ((q1 >= 16) && (q1 <= 20) && (u1 == 20)) {
        j1 = qp29;
        grade10 = "A";
    } else if ((q1 == 16) && (u1 == 40)) {
        j1 = qp41;
        grade10 = "D";
    } else if ((q1 == 17) && (u1 == 40)) {
        j1 = qp42;
        grade10 = "D";
    } else if ((q1 == 18) && (u1 == 40)) {
        j1 = qp43;
        grade10 = "D";
    } else if ((q1 == 19) && (u1 == 40)) {
        j1 = qp44;
        grade10 = "D";
    } else if ((q1 == 20) && (u1 == 40)) {
        j1 = qp45;
        grade10 = "C";
    } else if ((q1 == 21) && (u1 == 40)) {
        j1 = qp46;
        grade10 = "C";
    } else if ((q1 == 22) && (u1 == 40)) {
        j1 = qp47;
        grade10 = "C";
    } else if ((q1 == 23) && (u1 == 40)) {
        j1 = qp48;
        grade10 = "C";
    } else if ((q1 == 24) && (u1 == 40)) {
        j1 = qp49;
        grade10 = "C";
    } else if ((q1 == 25) && (u1 == 40)) {
        j1 = qp50;
        grade10 = "C";
    } else if ((q1 == 26) && (u1 == 40)) {
        j1 = qp51;
        grade10 = "B";
    } else if ((q1 == 27) && (u1 == 40)) {
        j1 = qp52;
        grade10 = "B";
    } else if ((q1 == 28) && (u1 == 40)) {
        j1 = qp53;
        grade10 = "B";
    } else if ((q1 == 29) && (u1 == 40)) {
        j1 = qp54;
        grade10 = "B";
    } else if ((q1 == 30) && (u1 == 40)) {
        j1 = qp55;
        grade10 = "B";
    } else if ((q1 == 31) && (u1 == 40)) {
        j1 = qp56;
        grade10 = "B";
    } else if ((q1 >= 32) && (q1 <= 40) && (u1 == 40)) {
        j1 = qp57;
        grade10 = "A";
    } else if ((q1 == 32) && (u1 == 80)) {
        j1 = qp86;
        grade10 = "D";
    } else if ((q1 == 33) && (u1 == 80)) {
        j1 = qp87;
        grade10 = "D";
    } else if ((q1 == 34) && (u1 == 80)) {
        j1 = qp88;
        grade10 = "D";
    } else if ((q1 == 35) && (u1 == 80)) {
        j1 = qp89;
        grade10 = "D";
    } else if ((q1 == 36) && (u1 == 80)) {
        j1 = qp90;
        grade10 = "D";
    } else if ((q1 == 37) && (u1 == 80)) {
        j1 = qp91;
        grade10 = "D";
    } else if ((q1 == 38) && (u1 == 80)) {
        j1 = qp92;
        grade10 = "D";
    } else if ((q1 == 39) && (u1 == 80)) {
        j1 = qp93;
        grade10 = "D";
    } else if ((q1 == 40) && (u1 == 80)) {
        j1 = qp94;
        grade10 = "C";
    } else if ((q1 == 41) && (u1 == 80)) {
        j1 = qp95;
        grade10 = "C";
    } else if ((q1 == 42) && (u1 == 80)) {
        j1 = qp96;
        grade10 = "C";
    } else if ((q1 == 43) && (u1 == 80)) {
        j1 = qp97;
        grade10 = "C";
    } else if ((q1 == 44) && (u1 == 80)) {
        j1 = qp98;
        grade10 = "C";
    } else if ((q1 == 45) && (u1 == 80)) {
        j1 = qp99;
        grade10 = "C";
    } else if ((q1 == 46) && (u1 == 80)) {
        j1 = qp100;
        grade10 = "C";
    } else if ((q1 == 47) && (u1 == 80)) {
        j1 = qp101;
        grade10 = "C";
    } else if ((q1 == 48) && (u1 == 80)) {
        j1 = qp102;
        grade10 = "C";
    } else if ((q1 == 49) && (u1 == 80)) {
        j1 = qp103;
        grade10 = "C";
    } else if ((q1 == 50) && (u1 == 80)) {
        j1 = qp104;
        grade10 = "C";
    } else if ((q1 == 51) && (u1 == 80)) {
        j1 = qp105;
        grade10 = "C";
    } else if ((q1 == 52) && (u1 == 80)) {
        j1 = qp106;
        grade10 = "B";
    } else if ((q1 == 53) && (u1 == 80)) {
        j1 = qp107;
        grade10 = "B";
    } else if ((q1 == 54) && (u1 == 80)) {
        j1 = qp108;
        grade10 = "B";
    } else if ((q1 == 55) && (u1 == 80)) {
        j1 = qp109;
        grade10 = "B";
    } else if ((q1 == 56) && (u1 == 80)) {
        j1 = qp110;
        grade10 = "B";
    } else if ((q1 == 57) && (u1 == 80)) {
        j1 = qp111;
        grade10 = "B";
    } else if ((q1 == 58) && (u1 == 80)) {
        j1 = qp112;
        grade10 = "B";
    } else if ((q1 == 59) && (u1 == 80)) {
        j1 = qp113;
        grade10 = "B";
    } else if ((q1 == 60) && (u1 == 80)) {
        j1 = qp114;
        grade10 = "B";
    } else if ((q1 == 61) && (u1 == 80)) {
        j1 = qp115;
        grade10 = "B";
    } else if ((q1 == 62) && (u1 == 80)) {
        j1 = qp116;
        grade10 = "B";
    } else if ((q1 == 63) && (u1 == 80)) {
        j1 = qp117;
        grade10 = "B";
    } else if ((q1 >= 64) && (q1 <= 80) && (u1 == 80)) {
        j1 = qp118;
        grade10 = "A";
    } else if ((q1 == 40) && (u1 == 100)) {
        j1 = qp120;
        grade10 = "D";
    } else if ((q1 == 41) && (u1 == 100)) {
        j1 = qp121;
        grade10 = "D";
    } else if ((q1 == 42) && (u1 == 100)) {
        j1 = qp122;
        grade10 = "D";
    } else if ((q1 == 43) && (u1 == 100)) {
        j1 = qp123;
        grade10 = "D";
    } else if ((q1 == 44) && (u1 == 100)) {
        j1 = qp124;
        grade10 = "D";
    } else if ((q1 == 45) && (u1 == 100)) {
        j1 = qp125;
        grade10 = "D";
    } else if ((q1 == 46) && (u1 == 100)) {
        j1 = qp126;
        grade10 = "D";
    } else if ((q1 == 47) && (u1 == 100)) {
        j1 = qp127;
        grade10 = "D";
    } else if ((q1 == 48) && (u1 == 100)) {
        j1 = qp128;
        grade10 = "D";
    } else if ((q1 == 49) && (u1 == 100)) {
        j1 = qp129;
        grade10 = "D";
    } else if ((q1 == 50) && (u1 == 100)) {
        j1 = qp130;
        grade10 = "C";
    } else if ((q1 == 51) && (u1 == 100)) {
        j1 = qp131;
        grade10 = "C";
    } else if ((q1 == 52) && (u1 == 100)) {
        j1 = qp132;
        grade10 = "C";
    } else if ((q1 == 53) && (u1 == 100)) {
        j1 = qp133;
        grade10 = "C";
    } else if ((q1 == 54) && (u1 == 100)) {
        j1 = qp134;
        grade10 = "C";
    } else if ((q1 == 55) && (u1 == 100)) {
        j1 = qp135;
        grade10 = "C";
    } else if ((q1 == 56) && (u1 == 100)) {
        j1 = qp136;
        grade10 = "C";
    } else if ((q1 == 57) && (u1 == 100)) {
        j1 = qp137;
        grade10 = "C";
    } else if ((q1 == 58) && (u1 == 100)) {
        j1 = qp138;
        grade10 = "C";
    } else if ((q1 == 59) && (u1 == 100)) {
        j1 = qp139;
        grade10 = "C";
    } else if ((q1 == 60) && (u1 == 100)) {
        j1 = qp140;
        grade10 = "C";
    } else if ((q1 == 61) && (u1 == 100)) {
        j1 = qp141;
        grade10 = "C";
    } else if ((q1 == 62) && (u1 == 100)) {
        j1 = qp142;
        grade10 = "C";
    } else if ((q1 == 63) && (u1 == 100)) {
        j1 = qp143;
        grade10 = "C";
    } else if ((q1 == 64) && (u1 == 100)) {
        j1 = qp144;
        grade10 = "C";
    } else if ((q1 == 65) && (u1 == 100)) {
        j1 = qp145;
        grade10 = "B";
    } else if ((q1 == 66) && (u1 == 100)) {
        j1 = qp146;
        grade10 = "B";
    } else if ((q1 == 67) && (u1 == 100)) {
        j1 = qp147;
        grade10 = "B";
    } else if ((q1 == 68) && (u1 == 100)) {
        j1 = qp148;
        grade10 = "B";
    } else if ((q1 == 69) && (u1 == 100)) {
        j1 = qp149;
        grade10 = "B";
    } else if ((q1 == 70) && (u1 == 100)) {
        j1 = qp150;
        grade10 = "B";
    } else if ((q1 == 71) && (u1 == 100)) {
        j1 = qp151;
        grade10 = "B";
    } else if ((q1 == 72) && (u1 == 100)) {
        j1 = qp152;
        grade10 = "B";
    } else if ((q1 == 73) && (u1 == 100)) {
        j1 = qp153;
        grade10 = "B";
    } else if ((q1 == 74) && (u1 == 100)) {
        j1 = qp154;
        grade10 = "B";
    } else if ((q1 == 75) && (u1 == 100)) {
        j1 = qp155;
        grade10 = "B";
    } else if ((q1 == 76) && (u1 == 100)) {
        j1 = qp156;
        grade10 = "B";
    } else if ((q1 == 77) && (u1 == 100)) {
        j1 = qp157;
        grade10 = "B";
    } else if ((q1 == 78) && (u1 == 100)) {
        j1 = qp158;
        grade10 = "B";
    } else if ((q1 == 79) && (u1 == 100)) {
        j1 = qp159;
        grade10 = "B";
    } else if ((q1 >= 80) && (q1 <= 100) && (u1 == 100)) {
        j1 = qp160;
        grade10 = "A";
    } else {
        j1 = qp20;
        grade10 = "NaN";
    }


    gpacontainer = document.getElementById("r");
    details = document.getElementById("detail");
    err = document.getElementById("error");
    //checking if values are equal to either 20 40 60 80 or 100.
    if ((h == 60 || h == 80 || h == 20 || h == 40 || h == 100 || h == 0) && (i == 60 || i == 80 || i == 20 || i == 40 || i == 100 || i == 0) && (j == 60 || j == 80 || j == 20 || j == 40 || j == 100 || j == 0) && (k == 60 || k == 80 || k == 20 || k == 40 || k == 100 || k == 0) && (l == 60 || l == 80 || l == 20 || l == 40 || l == 100 || l == 0) && (m == 60 || m == 80 || m == 20 || m == 40 || m == 100 || m == 0) && (r1 == 60 || r1 == 80 || r1 == 20 || r1 == 40 || r1 == 100 || r1 == 0) && (s1 == 60 || s1 == 80 || s1 == 20 || s1 == 40 || s1 == 100 || s1 == 0) && (t1 == 60 || t1 == 80 || t1 == 20 || t1 == 40 || t1 == 100 || t1 == 0) && (u1 == 60 || u1 == 80 || u1 == 20 || u1 == 40 || u1 == 100 || u1 == 0)) {
        //checking if obtained marks are not exceeding total marks.
        if ((a <= h) && (b <= i) && (c <= j) && (d <= k) && (e <= l) && (f <= m) && (n1 <= r1) && (o1 <= s1) && (p1 <= t1) && (q1 <= u1)) {
            totalsumob = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e) + parseFloat(f) + parseFloat(n1) + parseFloat(o1) + parseFloat(p1) + parseFloat(q1);
            totalsum = parseFloat(h) + parseFloat(i) + parseFloat(j) + parseFloat(k) + parseFloat(l) + parseFloat(m) + parseFloat(r1) + parseFloat(s1) + parseFloat(t1) + parseFloat(u1);
            //checking if the credit hours are zero
            if (g == "") {
                gpacontainer.classList.add("hidden");
                gpacontainer.classList.remove("visible");
                err.classList.add("visible");
                err.classList.remove("hidden");
                err.textContent = "Please Check your credit hours.";
                return false;
            } else if ((g >= "1") && (g >= "100")) {
                gpacontainer.classList.add("visible");
                gpacontainer.classList.remove("hidden");
                err.classList.add("hidden");
                err.classList.remove("visible");
                sum = parseFloat(a1) + parseFloat(b1) + parseFloat(c1) + parseFloat(d1) + parseFloat(e1) + parseFloat(f1) + parseFloat(g1) + parseFloat(h1) + parseFloat(i1) + parseFloat(j1);
                raw = (sum / g);
                result = raw.toFixed(2); //reduce resultant number upto 2 decimal points.
                gpacontainer.textContent = "Your GPA is:  " + result;
                gpacontainer.scrollIntoView(); //scroll to GPA number
            }
        } else {
            gpacontainer.classList.add("hidden");
            gpacontainer.classList.remove("visible");
            err.classList.add("visible");
            err.classList.remove("hidden");
            err.textContent = "Please check your obtained marks.";
            return false;
        }
    } else {
        gpacontainer.classList.add("hidden");
        gpacontainer.classList.remove("visible");
        err.classList.add("visible");
        err.classList.remove("hidden");
        err.textContent = "Please check your total marks.";
        return false;
    }

    //display more detail button
    if (err.classList.contains("visible")) {
        details.classList.add("hidden");
        details.classList.remove("visible");
    } else if (err.classList.contains("hidden")) {
        details.classList.add("visible");
        details.classList.remove("hidden");
    }





    return false;
}

function table() {

    //for percentage calculation.
    per1 = ((a / h) * 100);
    if ((a == 0) || (h == 0)) {
        per1f = 0;
    } else {
        per1f = per1.toFixed(2);
    }
    per2 = ((b / i) * 100);
    if ((b == 0) || (i == 0)) {
        per2f = 0;
    } else {
        per2f = per2.toFixed(2);
    }
    per3 = ((c / j) * 100);
    if ((c == 0) || (j == 0)) {
        per3f = 0;
    } else {
        per3f = per3.toFixed(2);
    }
    per4 = ((d / k) * 100);
    if ((d == 0) || (k == 0)) {
        per4f = 0;
    } else {
        per4f = per4.toFixed(2);
    }
    per5 = ((e / l) * 100);
    if ((e == 0) || (l == 0)) {
        per5f = 0;
    } else {
        per5f = per5.toFixed(2);
    }
    per6 = ((f / m) * 100);
    if ((f == 0) || (m == 0)) {
        per6f = 0;
    } else {
        per6f = per6.toFixed(2);
    }
    per7 = ((n1 / r1) * 100);
    if ((n1 == 0) || (r1 == 0)) {
        per7f = 0;
    } else {
        per7f = per7.toFixed(2);
    }
    per8 = ((o1 / s1) * 100);
    if ((o1 == 0) || (s1 == 0)) {
        per8f = 0;
    } else {
        per8f = per8.toFixed(2);
    }
    per9 = ((p1 / t1) * 100);
    if ((p1 == 0) || (t1 == 0)) {
        per9f = 0;
    } else {
        per9f = per9.toFixed(2);
    }
    per10 = ((q1 / u1) * 100);
    if ((q1 == 0) || (u1 == 0)) {
        per10f = 0;
    } else {
        per10f = per10.toFixed(2);
    }
    per = ((totalsumob / totalsum) * 100);
    perf = per.toFixed(2) + " % ";


    //FILL THE TABLE  

    cell1quapo.textContent = a1;
    cell2quapo.textContent = b1;
    cell3quapo.textContent = c1;
    cell4quapo.textContent = d1;
    cell5quapo.textContent = e1;
    cell6quapo.textContent = f1;
    cell7quapo.textContent = g1;
    cell8quapo.textContent = h1;
    cell9quapo.textContent = i1;
    cell10quapo.textContent = j1;
    celltquapo.textContent = sum;
    cell1OM.textContent = a;
    cell2OM.textContent = b;
    cell3OM.textContent = c;
    cell4OM.textContent = d;
    cell5OM.textContent = e;
    cell6OM.textContent = f;
    cell7OM.textContent = n1;
    cell8OM.textContent = o1;
    cell9OM.textContent = p1;
    cell10OM.textContent = q1;
    celltOM.textContent = totalsumob;
    cell1gr.textContent = grade1;
    cell2gr.textContent = grade2;
    cell3gr.textContent = grade3;
    cell4gr.textContent = grade4;
    cell5gr.textContent = grade5;
    cell6gr.textContent = grade6;
    cell7gr.textContent = grade7;
    cell8gr.textContent = grade8;
    cell9gr.textContent = grade9;
    cell10gr.textContent = grade10;
    cell1pr.textContent = per1f;
    cell2pr.textContent = per2f;
    cell3pr.textContent = per3f;
    cell4pr.textContent = per4f;
    cell5pr.textContent = per5f;
    cell6pr.textContent = per6f;
    cell7pr.textContent = per7f;
    cell8pr.textContent = per8f;
    cell9pr.textContent = per9f;
    cell10pr.textContent = per10f;
    // celltpr.textContent = perf;

    //show details table
    details = document.getElementById("detail");
    moreinfo = document.getElementById("info");
    moreinfo.classList.toggle("visible");
    moreinfo.classList.toggle("hidden");

    if (moreinfo.classList.contains("visible")) {
        details.textContent = "Hide Details -";
    } else if (moreinfo.classList.contains("hidden")) {
        details.textContent = "Show Details +";
    }

}






console.log("All Good");