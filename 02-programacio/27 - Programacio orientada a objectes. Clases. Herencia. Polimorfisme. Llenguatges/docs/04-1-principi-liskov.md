# 4.1. Principi de Substitució de Liskov (LSP)

El **Principi de Substitució de Liskov** és un dels pilars del disseny orientat a objectes i forma part dels **principis SOLID**.  
Va ser formulat per Barbara Liskov el 1987, i estableix el següent:

> *“Les subclasses han de poder substituir les seues superclasses sense alterar el correcte funcionament del programa.”*

Això significa que, si una classe `B` hereta de `A`, qualsevol codi que funcione amb objectes de tipus `A` hauria de funcionar igualment amb objectes de tipus `B`.

---

## 4.1.1. Significat pràctic

Quan una subclasse **viola** el LSP, pot provocar comportaments inesperats, errors o inconsistències.  
El principi busca garantir que les relacions d’herència siguen **coherents**, és a dir, que la subclasse mantinga les **expectatives de comportament** de la superclasse.

---

## 4.1.2. Exemple correcte

```java
class Vehiculo {
    public void moure(){
        System.out.println("El vehicle es mou.");
    }
}

class Cotxe extends Vehiculo {
    @Override
    public void moure(){
        System.out.println("El cotxe circula per la carretera.");
    }
}

class Bicicleta extends Vehiculo {
    @Override
    public void moure(){
        System.out.println("La bicicleta pedaleja suaument.");
    }
}

public class Prova {
    public static void main(String[] args){
        Vehiculo v1 = new Cotxe();
        Vehiculo v2 = new Bicicleta();

        v1.moure();  // El cotxe circula per la carretera.
        v2.moure();  // La bicicleta pedaleja suaument.
    }
}
```

Tant `Cotxe` com `Bicicleta` poden substituir `Vehiculo` sense alterar el comportament esperat.  
Aquest és un exemple **correcte** d’aplicació del principi de substitució.

---

## 4.1.3. Exemple incorrecte

Un error comú és crear subclasses que **limiten** o **trenquen** el comportament de la superclasse.

```java
class Cotxe {
    public void accelerar(){
        System.out.println("Accelerant amb motor de combustió.");
    }
}

class CotxeElectric extends Cotxe {
    @Override
    public void accelerar(){
        throw new UnsupportedOperationException("Els cotxes elèctrics no acceleren així!");
    }
}
```

En aquest cas, `CotxeElectric` **no respecta** el comportament esperat de `Cotxe`, ja que llança una excepció quan es fa una crida legítima a `accelerar()`.  
El codi que funcione amb `Cotxe` deixarà de funcionar amb `CotxeElectric`.

---

## 4.1.4. Regles bàsiques del LSP

Perquè una subclasse respecte el principi de Liskov, ha de complir:

1. **Precondicions**: no poden ser més restrictives que les de la superclasse.  
2. **Postcondicions**: no poden ser més febles que les de la superclasse.  
3. **Invariants**: s’han de mantenir les mateixes regles de consistència d’estat.  
4. **Tipus de retorn**: poden ser més específics, però mai incompatibles.  

---

## 4.1.5. Exemple visual (LSP)

Recordatori del **Principi de Substitució de Liskov**:

![liskov_principle](md_media/liskov_meme.jpg)

Aquest mem popular il·lustra que heretar d’una classe no significa “ser una versió modificada” de qualsevol manera, sinó **ser un tipus substituïble** que manté el contracte original.

---

## 4.1.6. UML textual d’exemple

```text
           ┌──────────────┐
           │   Vehiculo   │
           │--------------│
           │ + moure()    │
           └──────┬───────┘
                  │
    ┌─────────────┴─────────────┐
    │                           │
┌───▼──────┐             ┌──────▼──────┐
│  Cotxe   │             │  Bicicleta  │
│----------│             │--------------│
│ + moure()│             │ + moure()    │
└──────────┘             └──────────────┘
```

En aquest diagrama, `Cotxe` i `Bicicleta` poden ser tractats com a `Vehiculo` sense alterar la lògica de cap programa que use la superclasse.

---

## 4.1.7. Conclusió

El principi de Liskov assegura que el sistema siga **coherent, ampliable i fiable**, ja que impedeix herències incorrectes o trencades.

> *“Si una subclasse trenca la promesa de la seua superclasse, trenca també la confiança del programador.”*
