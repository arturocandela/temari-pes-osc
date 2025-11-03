# 3.4.1. Sobrecàrrega de mètodes (ad-hoc)

La **sobrecàrrega de mètodes** és una forma de **polimorfisme ad-hoc** o **estàtic**, que ocorre quan dues o més funcions tenen **el mateix nom** però **diferents paràmetres** (quantitat o tipus).

Aquest mecanisme permet que un mateix mètode s’adapte a diferents tipus de dades o situacions sense canviar el seu nom.

---

## 3.4.1.1. Exemple bàsic

```java
public class Saludo {
    public void saludar(){
        System.out.println("Hola");
    }

    public void saludar(String nombre){
        System.out.println("Hola " + nombre);
    }
}
```

En aquest exemple, el mètode `saludar` està **sobrecàrregat**:  
* Una versió mostra un missatge general.  
* L’altra accepta un paràmetre `String` per personalitzar el missatge.

Ús:

```java
Saludo s = new Saludo();
s.saludar();           // Hola
s.saludar("Arturo");   // Hola Arturo
```

El compilador selecciona automàticament quina versió del mètode s’ha d’executar segons els paràmetres que rep.

---

## 3.4.1.2. Regles de la sobrecàrrega

Perquè dues versions d’un mètode siguen vàlides com a sobrecàrrega:

1. Han de tindre **diferents paràmetres** (nombre, tipus o ordre).  
2. Poden tindre **el mateix o diferent tipus de retorn**.  
3. No poden diferir **només pel tipus de retorn** (el compilador no ho pot distingir).  
4. Poden tindre **modificadors d’accés** diferents (`public`, `private`, etc.).

---

## 3.4.1.3. Exemple avançat

```java
public class Calculadora {

    int sumar(int a, int b){
        return a + b;
    }

    double sumar(double a, double b){
        return a + b;
    }

    int sumar(int a, int b, int c){
        return a + b + c;
    }
}
```

Ús:

```java
Calculadora calc = new Calculadora();

System.out.println(calc.sumar(2, 3));       // 5
System.out.println(calc.sumar(2.5, 3.5));   // 6.0
System.out.println(calc.sumar(1, 2, 3));    // 6
```

El mateix nom `sumar` serveix per a diferents contextos, i el **compilador** tria la versió correcta abans d’executar el programa.

---

## 3.4.1.4. Avantatges

* **Llegibilitat**: el codi és més natural i intuïtiu.  
* **Mantenibilitat**: s’agrupen operacions semblants sota el mateix nom.  
* **Reutilització**: permet crear funcions flexibles per a diferents tipus de dades.  
* **Eficàcia**: la resolució es fa en temps de compilació, no d’execució.

---

## 3.4.1.5. Diferència amb la sobreescriptura

| Aspecte | Sobrecàrrega | Sobreescriptura |
|----------|---------------|------------------|
| **Moment de resolució** | Compilació | Execució |
| **Classes implicades** | Mateixa classe | Superclasse i subclasse |
| **Objectiu** | Variar els paràmetres | Canviar el comportament |
| **Paraula clau @Override** | No s’utilitza | S’utilitza |
| **Tipus de polimorfisme** | Estàtic (ad-hoc) | Dinàmic (inherent) |

---

## 3.4.1.6. Resum

La sobrecàrrega permet tindre diversos mètodes amb el mateix nom per realitzar accions similars però amb dades diferents.  
És un dels mecanismes més comuns del **polimorfisme estàtic** i millora la claredat del codi.

> *“Sobrecàrrega és dir el mateix, però entendre’l segons el context.”*
