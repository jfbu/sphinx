// Generated from romanian.sbl by Snowball 3.0.1 - https://snowballstem.org/

/**@constructor*/
var RomanianStemmer = function() {
    var base = new BaseStemmer();

    /** @const */ var a_0 = [
        ["\u015F", -1, 1],
        ["\u0163", -1, 2]
    ];

    /** @const */ var a_1 = [
        ["", -1, 3],
        ["I", 0, 1],
        ["U", 0, 2]
    ];

    /** @const */ var a_2 = [
        ["ea", -1, 3],
        ["a\u021Bia", -1, 7],
        ["aua", -1, 2],
        ["iua", -1, 4],
        ["a\u021Bie", -1, 7],
        ["ele", -1, 3],
        ["ile", -1, 5],
        ["iile", 6, 4],
        ["iei", -1, 4],
        ["atei", -1, 6],
        ["ii", -1, 4],
        ["ului", -1, 1],
        ["ul", -1, 1],
        ["elor", -1, 3],
        ["ilor", -1, 4],
        ["iilor", 14, 4]
    ];

    /** @const */ var a_3 = [
        ["icala", -1, 4],
        ["iciva", -1, 4],
        ["ativa", -1, 5],
        ["itiva", -1, 6],
        ["icale", -1, 4],
        ["a\u021Biune", -1, 5],
        ["i\u021Biune", -1, 6],
        ["atoare", -1, 5],
        ["itoare", -1, 6],
        ["\u0103toare", -1, 5],
        ["icitate", -1, 4],
        ["abilitate", -1, 1],
        ["ibilitate", -1, 2],
        ["ivitate", -1, 3],
        ["icive", -1, 4],
        ["ative", -1, 5],
        ["itive", -1, 6],
        ["icali", -1, 4],
        ["atori", -1, 5],
        ["icatori", 18, 4],
        ["itori", -1, 6],
        ["\u0103tori", -1, 5],
        ["icitati", -1, 4],
        ["abilitati", -1, 1],
        ["ivitati", -1, 3],
        ["icivi", -1, 4],
        ["ativi", -1, 5],
        ["itivi", -1, 6],
        ["icit\u0103i", -1, 4],
        ["abilit\u0103i", -1, 1],
        ["ivit\u0103i", -1, 3],
        ["icit\u0103\u021Bi", -1, 4],
        ["abilit\u0103\u021Bi", -1, 1],
        ["ivit\u0103\u021Bi", -1, 3],
        ["ical", -1, 4],
        ["ator", -1, 5],
        ["icator", 35, 4],
        ["itor", -1, 6],
        ["\u0103tor", -1, 5],
        ["iciv", -1, 4],
        ["ativ", -1, 5],
        ["itiv", -1, 6],
        ["ical\u0103", -1, 4],
        ["iciv\u0103", -1, 4],
        ["ativ\u0103", -1, 5],
        ["itiv\u0103", -1, 6]
    ];

    /** @const */ var a_4 = [
        ["ica", -1, 1],
        ["abila", -1, 1],
        ["ibila", -1, 1],
        ["oasa", -1, 1],
        ["ata", -1, 1],
        ["ita", -1, 1],
        ["anta", -1, 1],
        ["ista", -1, 3],
        ["uta", -1, 1],
        ["iva", -1, 1],
        ["ic", -1, 1],
        ["ice", -1, 1],
        ["abile", -1, 1],
        ["ibile", -1, 1],
        ["isme", -1, 3],
        ["iune", -1, 2],
        ["oase", -1, 1],
        ["ate", -1, 1],
        ["itate", 17, 1],
        ["ite", -1, 1],
        ["ante", -1, 1],
        ["iste", -1, 3],
        ["ute", -1, 1],
        ["ive", -1, 1],
        ["ici", -1, 1],
        ["abili", -1, 1],
        ["ibili", -1, 1],
        ["iuni", -1, 2],
        ["atori", -1, 1],
        ["osi", -1, 1],
        ["ati", -1, 1],
        ["itati", 30, 1],
        ["iti", -1, 1],
        ["anti", -1, 1],
        ["isti", -1, 3],
        ["uti", -1, 1],
        ["i\u0219ti", -1, 3],
        ["ivi", -1, 1],
        ["it\u0103i", -1, 1],
        ["o\u0219i", -1, 1],
        ["it\u0103\u021Bi", -1, 1],
        ["abil", -1, 1],
        ["ibil", -1, 1],
        ["ism", -1, 3],
        ["ator", -1, 1],
        ["os", -1, 1],
        ["at", -1, 1],
        ["it", -1, 1],
        ["ant", -1, 1],
        ["ist", -1, 3],
        ["ut", -1, 1],
        ["iv", -1, 1],
        ["ic\u0103", -1, 1],
        ["abil\u0103", -1, 1],
        ["ibil\u0103", -1, 1],
        ["oas\u0103", -1, 1],
        ["at\u0103", -1, 1],
        ["it\u0103", -1, 1],
        ["ant\u0103", -1, 1],
        ["ist\u0103", -1, 3],
        ["ut\u0103", -1, 1],
        ["iv\u0103", -1, 1]
    ];

    /** @const */ var a_5 = [
        ["ea", -1, 1],
        ["ia", -1, 1],
        ["esc", -1, 1],
        ["\u0103sc", -1, 1],
        ["ind", -1, 1],
        ["\u00E2nd", -1, 1],
        ["are", -1, 1],
        ["ere", -1, 1],
        ["ire", -1, 1],
        ["\u00E2re", -1, 1],
        ["se", -1, 2],
        ["ase", 10, 1],
        ["sese", 10, 2],
        ["ise", 10, 1],
        ["use", 10, 1],
        ["\u00E2se", 10, 1],
        ["e\u0219te", -1, 1],
        ["\u0103\u0219te", -1, 1],
        ["eze", -1, 1],
        ["ai", -1, 1],
        ["eai", 19, 1],
        ["iai", 19, 1],
        ["sei", -1, 2],
        ["e\u0219ti", -1, 1],
        ["\u0103\u0219ti", -1, 1],
        ["ui", -1, 1],
        ["ezi", -1, 1],
        ["\u00E2i", -1, 1],
        ["a\u0219i", -1, 1],
        ["se\u0219i", -1, 2],
        ["ase\u0219i", 29, 1],
        ["sese\u0219i", 29, 2],
        ["ise\u0219i", 29, 1],
        ["use\u0219i", 29, 1],
        ["\u00E2se\u0219i", 29, 1],
        ["i\u0219i", -1, 1],
        ["u\u0219i", -1, 1],
        ["\u00E2\u0219i", -1, 1],
        ["a\u021Bi", -1, 2],
        ["ea\u021Bi", 38, 1],
        ["ia\u021Bi", 38, 1],
        ["e\u021Bi", -1, 2],
        ["i\u021Bi", -1, 2],
        ["\u00E2\u021Bi", -1, 2],
        ["ar\u0103\u021Bi", -1, 1],
        ["ser\u0103\u021Bi", -1, 2],
        ["aser\u0103\u021Bi", 45, 1],
        ["seser\u0103\u021Bi", 45, 2],
        ["iser\u0103\u021Bi", 45, 1],
        ["user\u0103\u021Bi", 45, 1],
        ["\u00E2ser\u0103\u021Bi", 45, 1],
        ["ir\u0103\u021Bi", -1, 1],
        ["ur\u0103\u021Bi", -1, 1],
        ["\u00E2r\u0103\u021Bi", -1, 1],
        ["am", -1, 1],
        ["eam", 54, 1],
        ["iam", 54, 1],
        ["em", -1, 2],
        ["asem", 57, 1],
        ["sesem", 57, 2],
        ["isem", 57, 1],
        ["usem", 57, 1],
        ["\u00E2sem", 57, 1],
        ["im", -1, 2],
        ["\u00E2m", -1, 2],
        ["\u0103m", -1, 2],
        ["ar\u0103m", 65, 1],
        ["ser\u0103m", 65, 2],
        ["aser\u0103m", 67, 1],
        ["seser\u0103m", 67, 2],
        ["iser\u0103m", 67, 1],
        ["user\u0103m", 67, 1],
        ["\u00E2ser\u0103m", 67, 1],
        ["ir\u0103m", 65, 1],
        ["ur\u0103m", 65, 1],
        ["\u00E2r\u0103m", 65, 1],
        ["au", -1, 1],
        ["eau", 76, 1],
        ["iau", 76, 1],
        ["indu", -1, 1],
        ["\u00E2ndu", -1, 1],
        ["ez", -1, 1],
        ["easc\u0103", -1, 1],
        ["ar\u0103", -1, 1],
        ["ser\u0103", -1, 2],
        ["aser\u0103", 84, 1],
        ["seser\u0103", 84, 2],
        ["iser\u0103", 84, 1],
        ["user\u0103", 84, 1],
        ["\u00E2ser\u0103", 84, 1],
        ["ir\u0103", -1, 1],
        ["ur\u0103", -1, 1],
        ["\u00E2r\u0103", -1, 1],
        ["eaz\u0103", -1, 1]
    ];

    /** @const */ var a_6 = [
        ["a", -1, 1],
        ["e", -1, 1],
        ["ie", 1, 1],
        ["i", -1, 1],
        ["\u0103", -1, 1]
    ];

    /** @const */ var /** Array<int> */ g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 32, 0, 0, 4];

    var /** boolean */ B_standard_suffix_removed = false;
    var /** number */ I_p2 = 0;
    var /** number */ I_p1 = 0;
    var /** number */ I_pV = 0;


    /** @return {boolean} */
    function r_norm() {
        var /** number */ among_var;
        /** @const */ var /** number */ v_1 = base.cursor;
        lab0: {
            while(true)
            {
                /** @const */ var /** number */ v_2 = base.cursor;
                lab1: {
                    golab2: while(true)
                    {
                        /** @const */ var /** number */ v_3 = base.cursor;
                        lab3: {
                            base.bra = base.cursor;
                            among_var = base.find_among(a_0);
                            if (among_var == 0)
                            {
                                break lab3;
                            }
                            base.ket = base.cursor;
                            switch (among_var) {
                                case 1:
                                    if (!base.slice_from("\u0219"))
                                    {
                                        return false;
                                    }
                                    break;
                                case 2:
                                    if (!base.slice_from("\u021B"))
                                    {
                                        return false;
                                    }
                                    break;
                            }
                            base.cursor = v_3;
                            break golab2;
                        }
                        base.cursor = v_3;
                        if (base.cursor >= base.limit)
                        {
                            break lab1;
                        }
                        base.cursor++;
                    }
                    continue;
                }
                base.cursor = v_2;
                break;
            }
        }
        base.cursor = v_1;
        return true;
    };

    /** @return {boolean} */
    function r_prelude() {
        while(true)
        {
            /** @const */ var /** number */ v_1 = base.cursor;
            lab0: {
                golab1: while(true)
                {
                    /** @const */ var /** number */ v_2 = base.cursor;
                    lab2: {
                        if (!(base.in_grouping(g_v, 97, 259)))
                        {
                            break lab2;
                        }
                        base.bra = base.cursor;
                        lab3: {
                            /** @const */ var /** number */ v_3 = base.cursor;
                            lab4: {
                                if (!(base.eq_s("u")))
                                {
                                    break lab4;
                                }
                                base.ket = base.cursor;
                                if (!(base.in_grouping(g_v, 97, 259)))
                                {
                                    break lab4;
                                }
                                if (!base.slice_from("U"))
                                {
                                    return false;
                                }
                                break lab3;
                            }
                            base.cursor = v_3;
                            if (!(base.eq_s("i")))
                            {
                                break lab2;
                            }
                            base.ket = base.cursor;
                            if (!(base.in_grouping(g_v, 97, 259)))
                            {
                                break lab2;
                            }
                            if (!base.slice_from("I"))
                            {
                                return false;
                            }
                        }
                        base.cursor = v_2;
                        break golab1;
                    }
                    base.cursor = v_2;
                    if (base.cursor >= base.limit)
                    {
                        break lab0;
                    }
                    base.cursor++;
                }
                continue;
            }
            base.cursor = v_1;
            break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_regions() {
        I_pV = base.limit;
        I_p1 = base.limit;
        I_p2 = base.limit;
        /** @const */ var /** number */ v_1 = base.cursor;
        lab0: {
            lab1: {
                /** @const */ var /** number */ v_2 = base.cursor;
                lab2: {
                    if (!(base.in_grouping(g_v, 97, 259)))
                    {
                        break lab2;
                    }
                    lab3: {
                        /** @const */ var /** number */ v_3 = base.cursor;
                        lab4: {
                            if (!(base.out_grouping(g_v, 97, 259)))
                            {
                                break lab4;
                            }
                            if (!base.go_out_grouping(g_v, 97, 259))
                            {
                                break lab4;
                            }
                            base.cursor++;
                            break lab3;
                        }
                        base.cursor = v_3;
                        if (!(base.in_grouping(g_v, 97, 259)))
                        {
                            break lab2;
                        }
                        if (!base.go_in_grouping(g_v, 97, 259))
                        {
                            break lab2;
                        }
                        base.cursor++;
                    }
                    break lab1;
                }
                base.cursor = v_2;
                if (!(base.out_grouping(g_v, 97, 259)))
                {
                    break lab0;
                }
                lab5: {
                    /** @const */ var /** number */ v_4 = base.cursor;
                    lab6: {
                        if (!(base.out_grouping(g_v, 97, 259)))
                        {
                            break lab6;
                        }
                        if (!base.go_out_grouping(g_v, 97, 259))
                        {
                            break lab6;
                        }
                        base.cursor++;
                        break lab5;
                    }
                    base.cursor = v_4;
                    if (!(base.in_grouping(g_v, 97, 259)))
                    {
                        break lab0;
                    }
                    if (base.cursor >= base.limit)
                    {
                        break lab0;
                    }
                    base.cursor++;
                }
            }
            I_pV = base.cursor;
        }
        base.cursor = v_1;
        /** @const */ var /** number */ v_5 = base.cursor;
        lab7: {
            if (!base.go_out_grouping(g_v, 97, 259))
            {
                break lab7;
            }
            base.cursor++;
            if (!base.go_in_grouping(g_v, 97, 259))
            {
                break lab7;
            }
            base.cursor++;
            I_p1 = base.cursor;
            if (!base.go_out_grouping(g_v, 97, 259))
            {
                break lab7;
            }
            base.cursor++;
            if (!base.go_in_grouping(g_v, 97, 259))
            {
                break lab7;
            }
            base.cursor++;
            I_p2 = base.cursor;
        }
        base.cursor = v_5;
        return true;
    };

    /** @return {boolean} */
    function r_postlude() {
        var /** number */ among_var;
        while(true)
        {
            /** @const */ var /** number */ v_1 = base.cursor;
            lab0: {
                base.bra = base.cursor;
                among_var = base.find_among(a_1);
                base.ket = base.cursor;
                switch (among_var) {
                    case 1:
                        if (!base.slice_from("i"))
                        {
                            return false;
                        }
                        break;
                    case 2:
                        if (!base.slice_from("u"))
                        {
                            return false;
                        }
                        break;
                    case 3:
                        if (base.cursor >= base.limit)
                        {
                            break lab0;
                        }
                        base.cursor++;
                        break;
                }
                continue;
            }
            base.cursor = v_1;
            break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_RV() {
        return I_pV <= base.cursor;
    };

    /** @return {boolean} */
    function r_R1() {
        return I_p1 <= base.cursor;
    };

    /** @return {boolean} */
    function r_R2() {
        return I_p2 <= base.cursor;
    };

    /** @return {boolean} */
    function r_step_0() {
        var /** number */ among_var;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_2);
        if (among_var == 0)
        {
            return false;
        }
        base.bra = base.cursor;
        if (!r_R1())
        {
            return false;
        }
        switch (among_var) {
            case 1:
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                if (!base.slice_from("a"))
                {
                    return false;
                }
                break;
            case 3:
                if (!base.slice_from("e"))
                {
                    return false;
                }
                break;
            case 4:
                if (!base.slice_from("i"))
                {
                    return false;
                }
                break;
            case 5:
                {
                    /** @const */ var /** number */ v_1 = base.limit - base.cursor;
                    lab0: {
                        if (!(base.eq_s_b("ab")))
                        {
                            break lab0;
                        }
                        return false;
                    }
                    base.cursor = base.limit - v_1;
                }
                if (!base.slice_from("i"))
                {
                    return false;
                }
                break;
            case 6:
                if (!base.slice_from("at"))
                {
                    return false;
                }
                break;
            case 7:
                if (!base.slice_from("a\u021Bi"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_combo_suffix() {
        var /** number */ among_var;
        /** @const */ var /** number */ v_1 = base.limit - base.cursor;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_3);
        if (among_var == 0)
        {
            return false;
        }
        base.bra = base.cursor;
        if (!r_R1())
        {
            return false;
        }
        switch (among_var) {
            case 1:
                if (!base.slice_from("abil"))
                {
                    return false;
                }
                break;
            case 2:
                if (!base.slice_from("ibil"))
                {
                    return false;
                }
                break;
            case 3:
                if (!base.slice_from("iv"))
                {
                    return false;
                }
                break;
            case 4:
                if (!base.slice_from("ic"))
                {
                    return false;
                }
                break;
            case 5:
                if (!base.slice_from("at"))
                {
                    return false;
                }
                break;
            case 6:
                if (!base.slice_from("it"))
                {
                    return false;
                }
                break;
        }
        B_standard_suffix_removed = true;
        base.cursor = base.limit - v_1;
        return true;
    };

    /** @return {boolean} */
    function r_standard_suffix() {
        var /** number */ among_var;
        B_standard_suffix_removed = false;
        while(true)
        {
            /** @const */ var /** number */ v_1 = base.limit - base.cursor;
            lab0: {
                if (!r_combo_suffix())
                {
                    break lab0;
                }
                continue;
            }
            base.cursor = base.limit - v_1;
            break;
        }
        base.ket = base.cursor;
        among_var = base.find_among_b(a_4);
        if (among_var == 0)
        {
            return false;
        }
        base.bra = base.cursor;
        if (!r_R2())
        {
            return false;
        }
        switch (among_var) {
            case 1:
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                if (!(base.eq_s_b("\u021B")))
                {
                    return false;
                }
                base.bra = base.cursor;
                if (!base.slice_from("t"))
                {
                    return false;
                }
                break;
            case 3:
                if (!base.slice_from("ist"))
                {
                    return false;
                }
                break;
        }
        B_standard_suffix_removed = true;
        return true;
    };

    /** @return {boolean} */
    function r_verb_suffix() {
        var /** number */ among_var;
        if (base.cursor < I_pV)
        {
            return false;
        }
        /** @const */ var /** number */ v_1 = base.limit_backward;
        base.limit_backward = I_pV;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_5);
        if (among_var == 0)
        {
            base.limit_backward = v_1;
            return false;
        }
        base.bra = base.cursor;
        switch (among_var) {
            case 1:
                lab0: {
                    /** @const */ var /** number */ v_2 = base.limit - base.cursor;
                    lab1: {
                        if (!(base.out_grouping_b(g_v, 97, 259)))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    base.cursor = base.limit - v_2;
                    if (!(base.eq_s_b("u")))
                    {
                        base.limit_backward = v_1;
                        return false;
                    }
                }
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        base.limit_backward = v_1;
        return true;
    };

    /** @return {boolean} */
    function r_vowel_suffix() {
        base.ket = base.cursor;
        if (base.find_among_b(a_6) == 0)
        {
            return false;
        }
        base.bra = base.cursor;
        if (!r_RV())
        {
            return false;
        }
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        r_norm();
        /** @const */ var /** number */ v_1 = base.cursor;
        r_prelude();
        base.cursor = v_1;
        r_mark_regions();
        base.limit_backward = base.cursor; base.cursor = base.limit;
        /** @const */ var /** number */ v_2 = base.limit - base.cursor;
        r_step_0();
        base.cursor = base.limit - v_2;
        /** @const */ var /** number */ v_3 = base.limit - base.cursor;
        r_standard_suffix();
        base.cursor = base.limit - v_3;
        /** @const */ var /** number */ v_4 = base.limit - base.cursor;
        lab0: {
            lab1: {
                /** @const */ var /** number */ v_5 = base.limit - base.cursor;
                lab2: {
                    if (!B_standard_suffix_removed)
                    {
                        break lab2;
                    }
                    break lab1;
                }
                base.cursor = base.limit - v_5;
                if (!r_verb_suffix())
                {
                    break lab0;
                }
            }
        }
        base.cursor = base.limit - v_4;
        /** @const */ var /** number */ v_6 = base.limit - base.cursor;
        r_vowel_suffix();
        base.cursor = base.limit - v_6;
        base.cursor = base.limit_backward;
        /** @const */ var /** number */ v_7 = base.cursor;
        r_postlude();
        base.cursor = v_7;
        return true;
    };

    /**@return{string}*/
    this['stemWord'] = function(/**string*/word) {
        base.setCurrent(word);
        this.stem();
        return base.getCurrent();
    };
};
