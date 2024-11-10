import { Plus, Search } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Label } from "./components/ui/label";

export function App() {
  return (
    <div className="container lg:w-1/2 mx-auto p-8">
      <h1 className="text-xl font-semibold mb-4">Produtos</h1>

      <div className="flex justify-between mb-4">
        <form action="" className="flex gap-3">
          <Input name="id" placeholder="Digite o ID do produto"></Input>
          <Input name="name" placeholder="Digite o nome do produto"></Input>
          <Button type="submit" variant="secondary">
            <Search/>Filtrar
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus></Plus>Novo produto
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Produto</DialogTitle>
              <DialogDescription>Criar um novo produto no sistema</DialogDescription>
            </DialogHeader>

            <form className="mt-6">
              <div className="grid grid-cols-4 items-center w-full gap-2 mb-2">
                <Label>Produto</Label>
                <Input className="col-span-3" id="name" />
              </div>
              <div className="grid grid-cols-4 items-center w-full gap-2 mb-6">
                <Label>Price</Label>
                <Input className="col-span-3" id="price" />
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="ghost">Cancelar</Button>
                </DialogClose>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border p-8 rounded-lg">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
          </TableHeader>

          <TableBody>
            {Array.from({ length: 10 }).map((_,i) => {
              return (
                <TableRow key={i}>
                  <TableCell>913813</TableCell>
                  <TableCell>Produto {i}</TableCell>
                  <TableCell>480.00</TableCell>
                </TableRow>
            )
            })}
          </TableBody>
        </Table>
        </div>
    </div>
  )
}