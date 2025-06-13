import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Lock, CreditCard, CheckCircle } from "lucide-react";

interface PaymentFlowProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSuccess?: () => void;
}

export default function PaymentFlow({
  isOpen = true,
  onClose = () => {},
  onSuccess = () => {},
}: PaymentFlowProps) {
  const [step, setStep] = useState<"details" | "processing" | "success">(
    "details",
  );
  const [paymentMethod, setPaymentMethod] = useState("credit");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("processing");
    // Simulate payment processing
    setTimeout(() => {
      setStep("success");
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 2000);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-[95vw] sm:w-[600px] sm:max-w-[600px] bg-zinc-900 border-zinc-800 p-4 sm:p-6">
        <div className="p-6">
          {step === "details" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Lock className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-semibold text-white">
                  Pagamento Seguro
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <RadioGroup
                  defaultValue={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="grid grid-cols-2 gap-4"
                >
                  <div
                    className={`border ${paymentMethod === "credit" ? "border-emerald-500" : "border-zinc-700"} rounded-lg p-4 cursor-pointer`}
                  >
                    <RadioGroupItem
                      value="credit"
                      id="credit"
                      className="sr-only"
                    />
                    <Label
                      htmlFor="credit"
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <CreditCard className="w-5 h-5 text-emerald-400" />
                      <span className="text-white">Cartão de Crédito</span>
                    </Label>
                  </div>

                  <div
                    className={`border ${paymentMethod === "pix" ? "border-emerald-500" : "border-zinc-700"} rounded-lg p-4 cursor-pointer`}
                  >
                    <RadioGroupItem value="pix" id="pix" className="sr-only" />
                    <Label
                      htmlFor="pix"
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-400"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                      <span className="text-white">PIX</span>
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "credit" && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber" className="text-white">
                        Número do Cartão
                      </Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className="text-white">
                          Validade
                        </Label>
                        <Input
                          id="expiry"
                          placeholder="MM/AA"
                          className="bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv" className="text-white">
                          CVV
                        </Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          className="bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="name" className="text-white">
                        Nome no Cartão
                      </Label>
                      <Input
                        id="name"
                        placeholder="NOME COMPLETO"
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === "pix" && (
                  <div className="text-center space-y-4">
                    <div className="bg-white p-4 rounded-lg inline-block">
                      {/* Placeholder for PIX QR Code */}
                      <div className="w-48 h-48 bg-zinc-200 rounded-lg" />
                    </div>
                    <p className="text-zinc-400">
                      Escaneie o código QR com seu aplicativo de pagamento
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
                >
                  Finalizar Pagamento
                </Button>
              </form>
            </motion.div>
          )}

          {step === "processing" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <div className="animate-spin w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4" />
              <p className="text-white text-lg">Processando seu pagamento...</p>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Pagamento Confirmado!
              </h3>
              <p className="text-zinc-400">
                Você receberá um email com os detalhes do acesso.
              </p>
            </motion.div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
