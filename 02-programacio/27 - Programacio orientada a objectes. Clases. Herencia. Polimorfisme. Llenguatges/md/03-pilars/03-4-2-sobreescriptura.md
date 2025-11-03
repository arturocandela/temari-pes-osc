# 3.4.2. Sobreescriptura de mètodes (d’inclusió)

La **sobreescriptura de mètodes** (*overriding*) és una forma de **polimorfisme dinàmic**, també coneguda com a **polimorfisme d’inclusió**.  
Consisteix a **redefinir un mètode heretat** d’una superclasse en una subclasse per canviar o adaptar el seu comportament.

En aquest cas, el mètode conserva el mateix nom, tipus de retorn i paràmetres, però el **codi del cos** és diferent.  
El mètode adequat s’executa segons el **tipus real de l’objecte** en temps d’execució.

---

## 3.4.2.1. Exemple bàsic

```java
public class VehiculoGasolina {
    public void arranca(){
        System.out.println("Arrancant amb gasolina...");
    }
}

public class Motocicleta extends VehiculoGasolina {
    @Override
    public void arranca(){
        System.out.println("La moto arranca amb acceleració suau.");
    }
}
```

Ús:

```java
VehiculoGasolina v1 = new VehiculoGasolina();
Motocicleta m1 = new Motocicleta();

v1.arranca();  // Arrancant amb gasolina...
m1.arranca();  // La moto arranca amb acceleració suau.
```

Encara que ambdós objectes tenen el mateix mètode `arranca()`, cadascun executa la seua pròpia versió segons el tipus real de l’objecte.

---

## 3.4.2.2. Polimorfisme amb sobreescriptura

També es pot fer servir una **referència de la superclasse** per apuntar a una instància de la subclasse:

```java
VehiculoGasolina v2 = new Motocicleta();
v2.arranca();  // La moto arranca amb acceleració suau.
```

En aquest cas, el tipus de la variable (`VehiculoGasolina`) és de la superclasse, però el mètode que s’executa és el de la subclasse (`Motocicleta`).  
Aquest mecanisme s’anomena **enllaç dinàmic** o **polimorfisme d’execució**.

---

## 3.4.2.3. Regles de la sobreescriptura

Perquè una sobreescriptura siga vàlida, cal complir aquestes condicions:

1. El mètode de la subclasse ha de tindre **el mateix nom**, **tipus de retorn** i **paràmetres**.  
2. Ha de tindre una **igual o major visibilitat** (p. ex., `protected` → `public`).  
3. No pot reduir l’àmbit d’excepcions declarades.  
4. No pot sobreescriure mètodes declarats com `final`, `static` o `private`.  
5. És recomanable usar l’anotació `@Override` per indicar explícitament la sobreescriptura.

---

## 3.4.2.4. Exemple avançat

```java
class Empleat {
    public void treballar(){
        System.out.println("L'empleat està treballant.");
    }
}

class Programador extends Empleat {
    @Override
    public void treballar(){
        System.out.println("El programador escriu codi Java.");
    }
}

class Dissenyador extends Empleat {
    @Override
    public void treballar(){
        System.out.println("El dissenyador crea interfícies visuals.");
    }
}
```

Ús:

```java
Empleat e1 = new Programador();
Empleat e2 = new Dissenyador();

e1.treballar(); // El programador escriu codi Java.
e2.treballar(); // El dissenyador crea interfícies visuals.
```

Encara que `e1` i `e2` són del tipus `Empleat`, cada un crida al seu mètode concret segons la classe real.  
Això és **polimorfisme per sobreescriptura**.

---

## 3.4.2.5. Comparació UML textual

```text
            ┌────────────────────┐
            │   VehiculoGasolina │
            │--------------------│
            │ + arranca()        │
            └────────┬───────────┘
                     │
           ┌─────────▼─────────────┐
           │     Motocicleta       │
           │-----------------------│
           │ + arranca() {override}│
           └───────────────────────┘
```

---

## 3.4.2.6. Avantatges de la sobreescriptura

* **Personalització**: cada subclasse pot redefinir comportaments adaptats al seu context.  
* **Reutilització**: s’aprofita el codi comú de la superclasse i només es modifica el necessari.  
* **Extensibilitat**: permet afegir nous tipus sense alterar el codi existent.  
* **Polimorfisme**: les subclasses poden ser utilitzades de manera uniforme com a objectes de la superclasse.

---

## 3.4.2.7. Diferència amb la sobrecàrrega

| Aspecte | Sobreescriptura | Sobrecàrrega |
|----------|------------------|--------------|
| **Classes implicades** | Superclasse i subclasse | Mateixa classe |
| **Moment de resolució** | Execució | Compilació |
| **Paràmetres** | Idèntics | Diferents |
| **Objectiu** | Canviar el comportament | Variar els arguments |
| **Paraula clau @Override** | Obligatòria (recomanada) | No s’utilitza |

---

## 3.4.2.8. Resum final

| Concepte | Descripció | Exemple |
|-----------|-------------|----------|
| **Sobreescriptura** | Redefinició d’un mètode heretat per canviar-ne el comportament | `Motocicleta.arranca()` |
| **@Override** | Assegura que el mètode existeix a la superclasse | `@Override public void treballar()` |
| **Polimorfisme dinàmic** | Executa el mètode segons el tipus real de l’objecte | `Empleat e = new Programador(); e.treballar();` |

---

> *“La sobreescriptura dona veu pròpia a allò que hereta, permetent que cada objecte parle amb el seu to.”*
