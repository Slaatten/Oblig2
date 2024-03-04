package oslomet.oblig2;

public class Kjop {
    private String film, fornavn, etternavn, epost, telefon;
    private int antall;

    public Kjop(String film, String fornavn, String etternavn, String epost, String telefon, int antall) {
        this.film = film;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.epost = epost;
        this.telefon = telefon;
        this.antall = antall;
    }
    public Kjop () {}

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }
}
