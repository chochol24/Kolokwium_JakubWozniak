﻿namespace Kolokwium.Models
{
    public enum Rodzaj
    {
        membranowa = 0,
        nozycowa = 1,
        mechaniczna = 2,
        optyczna = 3,
        hybrydowa = 4
    }
    public class Klawiatura
    {
        public int id { get; set; }
        public string model { get; set; }
        public Rodzaj rodzaj { get; set; }
    }
}
