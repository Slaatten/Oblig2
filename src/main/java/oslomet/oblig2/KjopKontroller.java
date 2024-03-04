package oslomet.oblig2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@RestController
public class KjopKontroller {
    private final List<Kjop>kjopRegister = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagre(Kjop billett){kjopRegister.add(billett);}
    @GetMapping("/hentAlle")
    public List<Kjop>hentAlle(){return kjopRegister;}
    @GetMapping("/slettAlle")
    public void slettAlle() {kjopRegister.clear();
    }

}
